require('../config/development.js');
GLOBAL.mongoose = require('mongoose');
mongoose.set('debug', true);

GLOBAL.Schema = mongoose.Schema;


require('./audio.js');
require('./scraping_logs.js');
app.models = mongoose.models;

// connect to mongodb 
//var url = mongodb_url;
var url = mongodb_url_deploy
//var url = mongodb_url_deploy_modulus
mongoose.connect(url);


//mongoose.models.Audio.remove({}).exec();
mongoose.models.Audio.count({}, function (err, num) { console.log('number of audio:',num)  });

module.exports = mongoose.models;

