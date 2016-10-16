var morgan = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
// bodyParser.json(): Parses the text as JSON and exposes the resulting object on req.body.

module.exports = function(app){
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};
