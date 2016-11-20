var gulp = require('gulp');

var browserSync = require('browser-sync')
var reload = browserSync.reload;


gulp.task('watch', function() {
  gulp.watch('angular/app/assets/css/*').on('change', reload);
  gulp.watch('angular/app/explore/*').on('change', reload);
  gulp.watch('angular/app/home/*').on('change', reload);
  gulp.watch('angular/app/project1.js').on('change', reload);
  gulp.watch('angular/index.html').on('change', reload);
});

gulp.task('serve', function() {
  browserSync({
    proxy: 'localhost:3000',
    port: 3030
  });
});

gulp.task('default', ['serve','watch']);
