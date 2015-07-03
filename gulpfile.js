var gulp = require('gulp'),
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css'),
    watch = require('gulp-watch'),
    rename = require("gulp-rename");

// Build sass into css
gulp.task('styles', function() {
  return gulp.src('./sources/sass/main.scss')
    .pipe(compass({
      css: './public/css',
      sass: './sources/sass'
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('minify', function() {
    return gulp.src('./public/css/main.css')
    .pipe(minifyCSS())
    .pipe(rename(function (path) {
    path.basename  = "main.min"
    }))
    .pipe(gulp.dest('./public/css'))
});

// Watch sass files for changes and then build
gulp.task('watch', function () {
   gulp.watch('./sources/sass/**/*.scss', ['styles']);
});

gulp.task('build', ['styles', 'minify']);
gulp.task('default', ['build']);
