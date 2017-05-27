var express = require('express'),
    app = express(),
    config = require('./config/config'),
    api = require('./api/api'),
    bodyParser = require('body-parser'),
    helmet = require('helmet'),
    hpp = require('hpp'),
    morgan = require('morgan'),
    noop = function(){},
    path = require('path'),
    source = path.resolve(path.dirname(require.main.filename), 'src'),
    staticSource = express.static('src');

app.use(function (req, res, next) {
  
  if (config.env === 'production' &&
      req.headers['x-forwarded-proto'] !== 'https') {
    var secureUrl = ['https://www.poily.io', req.url].join('');

    res.redirect(secureUrl);
  }

  next();
})

config.env === 'production' ? app.use(helmet()) : noop();

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

config.env === 'production' ? app.use(hpp()) : noop();

app.use(staticSource);

app.use('/api', api);

app.all('/*', function(req, res, next) {
  res.sendFile('index.html', {root: source});
});

module.exports = app;
