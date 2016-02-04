var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');

gulp.task('default', ['less']);

gulp.task('less', function() {
  gulp.src('./styles/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/'));

  gulp.src('./app/styles/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./app/styles/'));
});

gulp.task('watch', function() {
  watch('styles/**/*.less', function() {
    gulp.start('less');
  })
});
