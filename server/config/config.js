require('dotenv').config();
var config = {},
    configOpts = {
      dev: 'development',
      prod: 'production',
      defaultPort: 3000
    },
    envConfig;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

config.env = configOpts[process.env.NODE_ENV];

config.port = process.env.PORT || configOpts['defaultPort'];

try {
  envConfig = require('./config.' + config.env) || {};
} catch(error) {
  envConfig = {};
}

for (var key in envConfig) {
  config[key] = envConfig[key];
}

module.exports = config;
