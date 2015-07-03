var gulp = require('gulp'), 
   compass = require('gulp-compass'),
   minifyCSS = require('gulp-minify-css'),
   watch = require('gulp-watch');
 
gulp.task('styles', function() {
  gulp.src('./sources/sass/main.scss')
    .pipe(compass({
      css: 'public/css',
      sass: 'sources/sass'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
   gulp.watch('./sources/sass/**/*.scss', ['styles']);
});

gulp.task('build', ['styles']);
gulp.task('default', ['build', 'watch']);
