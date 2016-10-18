var config = require('./config/serverConfig')[process.env.NODE_ENV];
require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
// **** bodyParser.json(): Parses the text as JSON and exposes the resulting object on req.body. ****

// TODO implement a logger
// var logger = require('./server/util/logger')


app.use(require('node-sass-middleware')({
  src: path.join(__dirname + '/public'),
  dest: path.join(__dirname + '/public'),
  indentedSyntax: true,
  sourceMap: true
}));

app.use(express.static(path.join(__dirname + '/public')));

// app.use('/api', api);
require('./app/routes')(app);

app.use(function(req, res, next){
  var err = new Error('Not found');
  err.status = 404;
  next(err);
})

app.listen(config.port, function(){
  console.log(config.message);
})

module.exports = app;
