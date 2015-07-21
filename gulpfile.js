var gulp = require('gulp');
var server = require('gulp-server-livereload');
 
gulp.task('serve', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open:{
      	browser: 'chrome'
      }
    }));
});


