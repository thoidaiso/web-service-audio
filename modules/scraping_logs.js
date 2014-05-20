//Time run scraping

var ScrapingSchema = new Schema({
created_at : { type: Date, default: Date.now }
, type	 	: String
});


ScrapingSchema.statics.createScraping = function(type, callback)
{
	// console.log()
	var scraping 	= new this();
	scraping.type 	= type;
	scraping.save(function(err){
		if (err)
			callback(err);
	});
}



//find list 30 log by sequence and type
// if sequence = 1 get first 30 audios
// if sequece  = 2 get second 30 audios
ScrapingSchema.statics.findListScraping = function(type, sequence, callback){
	
	if (type && sequence)
	{
		skip = 0 + (sequence-1)*30;
		limit = 30 + (sequence-1)*30;
		mongoose.model('Scraping_Logs').find({
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

mongoose.model('Scraping_Logs', ScrapingSchema);
