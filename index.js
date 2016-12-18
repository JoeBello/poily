var config = require('./server/config/server.config')[process.env.NODE_ENV];
require('dotenv').config();
var app = require('./server/server');

app.listen(config.port);

console.log(config.message);
