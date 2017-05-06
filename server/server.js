var express = require('express'),
    api = require('./api/api'),
    app = express(),
    bodyParser = require('body-parser'),
    config = require('./config/config'),
    helmet = require('helmet'),
    hpp = require('hpp'),
    morgan = require('morgan'),
    noop = function(){},
    source = express.static('src')

config.env.prod ? app.use(helmet()) : noop();

config.env.prod ? app.use(helmet.contentSecurityPolicy({
                            directives: {
                              defaultSrc: ["'self'"]
                            }
                          })) : noop();

config.logging ? app.use(morgan('combined')) : noop();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

config.env.prod ? app.use(hpp()) : noop();

app.use(source);

app.use('/api', api);

app.use(function(req, res, next){
  var err = new Error('Not found');
  err.status = 404;
  next(err);
})

module.exports = app;
