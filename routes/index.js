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
