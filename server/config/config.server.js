var config = {
  dev: {
    env: 'dev',
    port: process.env.PORT || 3000,
    message: 'Running in development mode on port ' + (process.env.PORT || 3000)
  },
  prod: {
    env: 'prod',
    port: process.env.PORT || 3000,
    message: 'Running in development mode on port ' + (process.env.PORT || 3000)
  }
};

module.exports = config;
