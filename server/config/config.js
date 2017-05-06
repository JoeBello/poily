require('dotenv').config();
var config = {},
    envConfig;

config.env = process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.port = process.env.PORT || 3000;

try {
  envConfig = require('./config.' + config.env);
  envConfig = envConfig || {};
} catch(error) {
  envConfig = {};
}


for (var key in envConfig) {
  config[key] = envConfig[key];
}

module.exports = config;
