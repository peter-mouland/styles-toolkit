var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var s3 = require('gulp-s3');
var fs = require('fs');

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
      .pipe(gulp.dest('./dist/styles-toolkit/'));
});

gulp.task('deploy', function() {
    var config = JSON.parse(fs.readFileSync('./config/application.json'));
    gulp.src('./dist/**')
      .pipe(s3(config.aws));
});
