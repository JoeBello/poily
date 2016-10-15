var express = require('express');
var app = express();
var path = require('path');
var api = require('./api/api');

require('./middleware/appMiddleware')(app);

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', function(req, res){
  res.sendFile(path.join(__dirname + '../public/index.html'));
})

app.use('/api', api);

app.use('*', function(req, res, next){
  var err = new Error('Not found');
  err.status = 404;
  next(err);
})

module.exports = app;
