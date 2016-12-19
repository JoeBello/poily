// TODO implement a logger
// var logger = require('./server/util/logger')
// TODO body-parser for post requests

var express = require('express');
var app = express();
var api = require('./api/api');
var source = express.static('src');

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
