var config = require('./server/config/config.server')[process.env.NODE_ENV];
var app = require('./server/server');

app.listen(config.port);

console.log(config.message);
