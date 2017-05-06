var config = require('./server/config/config');
var app = require('./server/server');

app.listen(config.port);
