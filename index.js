var config = require('./server/config')[process.env.NODE_ENV];
require('dotenv').config();
var app = require('./server/server');
// TODO implement a logger
// var logger = require('./server/util/logger')

app.listen(config.port, function(){
  console.log(config.message);
})


// app.use(require('node-sass-middleware')({
//   src: path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   indentedSyntax: true,
//   sourceMap: true
// }));
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/places', places)
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
//
// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname + '/public/index.html'));
// })
// // error handlers
//
// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });
//
//
// app.listen(config.port, function(){
//   console.log(config.message);
// })
