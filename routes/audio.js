exports.get_list_blog_radio = function(req, res){
	console.log("go to get list blog radio ::"+req.body.sequence);
	sequence = req.body.sequence;
	Audio.findListAudio('blog_radio', sequence, function(docs){
		res.json(docs);	
	});
	
}

exports.get_total = function(req, res){
	console.log("get total audio");
	type = req.body.type;
	if (type)
		Audio.count({type: type}, function (err, num) { 
			console.log(num);			
			res.json(num)});
	else
		Audio.count({}, function (err, num) { 
			console.log(num);			
			res.json(num)});

}
