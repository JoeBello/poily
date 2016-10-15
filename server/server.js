var express = require('express');
var app = express();
var path = require('path');
var api = require('./api/api');
var public = '../public';

require('./middleware/appMiddleware')(app);

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, public),
  dest: path.join(__dirname, public),
  indentedSyntax: true,
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, public)));

app.use('/api', api);

app.use('*', function(req, res, next){
  var err = new Error('Not found');
  err.status = 404;
  next(err);
})

module.exports = app;
