var AudioSchema = new Schema({
created_at : { type: Date, default: Date.now }
, name 	 	: String
, url		: String
, imgUrl 	: String
, audioUrl	: String
, type	 	: String
, pos		: Number
});


AudioSchema.statics.createAudio = function(name, url, imgUrl, audioUrl, type, pos, callback)
{
	// console.log()
	var audio 	= new this();
	audio.name 	= name;
	audio.url 	= url;
	audio.imgUrl = imgUrl;
	audio.audioUrl = audioUrl;
	audio.type 	= type;
	audio.pos 	= pos;
	audio.save(function(err){
		if (err)
			callback(err);
	});
}


AudioSchema.statics.updateAudio = function(name, url, imgUrl, audioUrl, callback)
{
	this.update({
		'name': name
		},
		{
			'url': url, 
			'imgUrl': imgUrl, 
			'audioUrl': audioUrl
		},
		{ 
			'safe': true
		},function(err, numberAffected, raw)
		{
			if (err)
				return handleError(err);
			response("Update_Success");
			console.log('The number of updated documents was %d', numberAffected);
		}
	);
}

AudioSchema.statics.deleteAudio = function(name, type, callback)
{
	if (name && type)
	{
		mongoose.model('Audio').findOneAndRemove({
			'name': name,
			'type': type
		},function(err, info)
		{
			if (err)
				callback(err);
			console.log('Info about delete Audio::'+ info);
		}
		);
	}
}

AudioSchema.statics.findAudio = function(name, imgUrl, blog_audio_url, type, callback)
{
	if (name && type)
	{
		mongoose.model('Audio').findOne(
		       {name: name,
			type: type},
			function(err, docs)
			{
				if (err)
					callback("error: "+err);
				else{
					console.log("docs::"+docs);
					callback(name, imgUrl, blog_audio_url, docs);			
				}
			});
	}
}

//find list 20 audio by sequence
// if sequence = 1 get first 20 audios
// if sequece  = 2 get second 20 audios
AudioSchema.statics.findListAudio = function(type, sequence, callback){
	
	if (type && sequence)
	{
		skip = 0 + (sequence-1)*20;
		limit = 20;
		mongoose.model('Audio').find({
			type: type},null,{  skip:skip, // Starting Row
				       limit:limit, // Ending Row
					sort:{ 
						pos: -1 //Sort by pos DESC to get latest audio 
					     }
				    }, function(err, docs){
					if (!err)
						callback(docs);
					}); 
	}
}

mongoose.model('Audio', AudioSchema);
