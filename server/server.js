var express = require('express');
var app = express();
var api = require('./api/api');
var source = express.static('src');
var morgan = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
// **** bodyParser.json(): Parses the text as JSON and exposes the resulting object on req.body. ****

// TODO implement a logger
// var logger = require('./server/util/logger')

// setup the api
app.use('/api', api);

// serve application and pass routing off to AngularJS and UI-Router
app.use(source);


// global error handling
app.use(function(req, res, next){
  var err = new Error('Not found');
  err.status = 404;
  next(err);
})

module.exports = app;
