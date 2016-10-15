var config = require('./server/config')[process.env.NODE_ENV];
require('dotenv').config();
var app = require('./server/server');
// TODO implement a logger
// var logger = require('./server/util/logger')

app.listen(config.port, function(){
  console.log(config.message);
})
