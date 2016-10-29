var config = require('./config/serverConfig')[process.env.NODE_ENV];
require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');
var session = require('express-session');
var sassMiddleware = require('node-sass-middleware');
var bodyParser = require('body-parser');
// **** bodyParser.json(): Parses the text as JSON and exposes the resulting object on req.body. ****

// TODO implement a logger
// var logger = require('./server/util/logger')


app.use(sassMiddleware({
  src: path.join(__dirname + '/sass'),
  dest: path.join(__dirname + '/public'),
  debug: true,
  outputStyle: 'compressed'
}));

app.use(express.static(path.join(__dirname + '/public')));


require('./app/routes')(app);

app.use(function(req, res, next){
  var err = new Error('Not found');
  err.status = 404;
  next(err);
})

app.listen(config.port);

console.log(config.message);

module.exports = app;
