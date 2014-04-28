exports.get_list_blog_radio = function(req, res){
	console.log("go to get list blog radio ::"+req.body.sequence);
	sequence = req.body.sequence;
	Audio.findListAudio('blog_radio', sequence, function(docs){
		res.json(docs);	
	});
	
}
