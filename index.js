var app = require('./server/server'),
    config = require('./server/config/config');

app.listen(config.port);
