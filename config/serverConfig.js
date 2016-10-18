var config = {
  development: {
    env: 'development',
    port: process.env.PORT || 3000,
    message: 'running in development mode on port 3000'
  },
  testing: {
    env: 'testing',
    port: process.env.PORT || 3000,
    message: 'running in testing mode on port 3000'
  },
  production: {
    env: 'production',
    port: process.env.PORT || 3000,
    message: 'running in production mode on port 3000'
  }
};

module.exports = config;
