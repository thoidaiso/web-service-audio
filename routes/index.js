// // /*
// //  * GET home page.
// //  */
// 
// // exports.index = function(req, res){
// //   res.render('index', { title: 'Express' });
// // };
// 
// GLOBAL.Accounts = mongoose.model('User');
// GLOBAL.LoginToken = mongoose.model('LoginToken');
// GLOBAL.Tweet = mongoose.model('Tweet');
// GLOBAL.EM = require('../modules/email-dispatcher');
// 
// var auth = require('./auth.js');
// app.get('/auth/validatecode', auth.validateCode);
// app.get('/auth/login', auth.login);
// app.get('/auth/autologin', auth.autoLogin);
// app.get('/auth/register', auth.register);
// app.get('/auth/updateinfo', auth.updateAccount);
// app.get('/auth/lostpassword', auth.lostPassword);
// app.get('/auth/resetpassword', auth.resetPassword);
// //
// app.get('/auth/createfollowing', auth.createFollowing);
// app.get('/auth/getfollowing', auth.getFollowing);
// app.get('/auth/getfollowers', auth.getFollowers);
// app.get('/auth/getinfouser', auth.getInfoUser);
// 
// var tweet = require('./tweet.js');
// app.get('/tweet/create', tweet.createTweet);
// app.get('/tweet/createcomment', tweet.createComment);
// app.get('/tweet/deletecomment', tweet.deleteComment);

GLOBAL.Audio = mongoose.model('Audio');

var audio = require('./audio.js');
//get list include latest 30 blog radio with limit and sequence
//if sequence =1 get last 30 blog radio
//if sequece = 2 get secode 30 blog radio
app.post('/audio/get_latest_list_blog_radio', audio.get_list_blog_radio);


// app.get('/audio/')
