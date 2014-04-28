
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');
  // , routes = require('./routes');

var bodyParser = require('body-parser');
// var app = module.exports = express.createServer();

// Configuration
GLOBAL.app = express();
app.use(bodyParser());
//app.enable("jsonp callback");


// app.configure(function(){  
  // app.config = JSON.parse( require('fs').readFileSync('./config/development.json', 'utf8') );
  // app.set('port', process.env.PORT || 3000);
  // app.set('views', __dirname + '/views');
  // app.set('view engine', 'jade');
  // app.use(express.favicon());
  // app.use(express.logger('dev'));
  // app.use(express.bodyParser());
  // app.use(express.methodOverride());
  // app.use(express.cookieParser('your secret here'));
  // app.use(express.session());
  // app.use(app.router);
  // // app.use(require('stylus').middleware(__dirname + '/public'));
  // app.use(express.static(path.join(__dirname, 'public')));
// });

var env = process.env.NODE_ENV || 'development';
//if ('development' == env) 
{
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.static(__dirname + '/public'));
};

// app.configure('development', function(){
  // app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });

// app.configure('production', function(){
  // app.use(express.errorHandler());
// });

// Routes

// app.get('/', routes.index);

require('./modules/main.js');
require('./routes/index.js');

GLOBAL.Audio = mongoose.model('Audio');

var scraping_audio = require('./scraping/scraping_blog_audio.js');

//scraping_audio.scrapingPage();

http.createServer(app).listen(3001, function(){
  console.log("Express server listening on port %d in %s mode", 3001, app.settings.env);
});
