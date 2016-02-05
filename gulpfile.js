var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var s3 = require('gulp-s3');

gulp.task('default', ['build']);

gulp.task('example_less', function() {
  gulp.src('./app/styles/*.less')
      .pipe(less())
      .pipe(minifyCSS())
      .pipe(gulp.dest('./app/styles/'));
});

gulp.task('example_watch', function() {
  watch('styles/**/*.less', function() {
    gulp.start('less');
  })
});

gulp.task('build', function() {
  gulp.src('./styles/toolkit.less')
      .pipe(less())
      .pipe(minifyCSS())
      .pipe(gulp.dest('./dist/'));
});

gulp.task('deploy', function() {
  gulp.src('./dist/**')
      .pipe(s3());
});
