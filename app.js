var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
var log = require('libs/log')(module);

var app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');


//var routes = require('./routes');
//var user = require('./routes/user');
//
//// all environments

//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(express.session({ secret: 'your secret here' }));
//app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));
//
//// development only
//if ('development' == app.get('env')) {
//  app.use(express.errorHandler());
//}
//
//app.get('/', routes.index);
//app.get('/users', user.list);

http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port' + config.get('port'));
});