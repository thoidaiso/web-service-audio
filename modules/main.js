require('../config/development.js');
GLOBAL.mongoose = require('mongoose');
mongoose.set('debug', true);

GLOBAL.Schema = mongoose.Schema;
// GLOBAL.mongooseTypes = require("mongoose-types");
// mongooseTypes.loadTypes(mongoose);

// GLOBAL.crypto = require('crypto');




require('./audio.js');
app.models = mongoose.models;

// connect to mongodb 
var url = mongodb_url;
//var url = mongodb_url_deploy
//var url = mongodb_url_deploy_modulus
mongoose.connect(url);


//mongoose.models.Audio.remove({pos:{$gte:0}}).exec();
mongoose.models.Audio.count({}, function (err, num) { console.log('number of audio:',num)  });
//mongoose.models.Audio.findListAudio('blog_radio',1, function(err, docs){console.log("\n\n\ndocs::   ",docs);});

module.exports = mongoose.models;

