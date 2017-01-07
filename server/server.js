require('dotenv').config();
var express = require('express');
var app = express();
var morgan = require('morgan');
var api = require('./api/api');
var source = express.static('src');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/project1');

// logging
app.use(morgan('combined'));

// serve application and pass routing off to AngularJS and UI-Router
app.use(source);

// setup the api
app.use('/api', api);


// global error handling
app.use(function(req, res, next){
  var err = new Error('Not found');
  err.status = 404;
  next(err);
})

module.exports = app;
