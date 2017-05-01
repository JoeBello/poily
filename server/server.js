require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var api = require('./api/api');
var source = express.static('src');

// logging
app.use(morgan('combined'));

// parse POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
