exports.get_total_in_day = function(req, res)
{	
	previous_day = Date.now() - 24 * 60 * 60;
	Scraping_Logs.count({created_at: {$gt: previous_day} }, function (err, num) { 
			console.log(num);			
			res.json(num) });
}

exports.get_latest_log = function(req, res)
{
	type = req.body.type;
	sequence = req.body.sequence;
	Scraping_Logs.findListScraping(type, sequence, function(docs){
		res.json(docs);	
	});
	
}
