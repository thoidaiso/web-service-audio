// // /*
// //  * GET home page.
// //  */
// 
// // exports.index = function(req, res){
// //   res.render('index', { title: 'Express' });
// // };
// 

GLOBAL.Audio = mongoose.model('Audio');

var audio = require('./audio.js');
//get list include latest 30 blog radio with limit and sequence
//if sequence =1 get last 30 blog radio
//if sequece = 2 get secode 30 blog radio
app.post('/audio/get_latest_list_blog_radio', audio.get_list_blog_radio);

//get the number of audio in database
app.post('/audio/get_total', audio.get_total);

GLOBAL.Scraping_Logs = mongoose.model('Scraping_Logs');

var scraping_logs = require('./scraping_logs.js');

//get the number of time run scraping  in day
app.post('/logs/get_total', scraping_logs.get_total_in_day);

//get list  of time run scraping  in day
app.post('/logs/get_latest_log', scraping_logs.get_latest_log);
