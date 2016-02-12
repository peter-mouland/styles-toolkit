require('newrelic'); // Ansible requires apps in production to be on NewRelic

var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var s3 = require('gulp-s3');
var fs = require('fs');

var version = JSON.parse(fs.readFileSync('./package.json')).version;

gulp.task('default', ['build']);

gulp.task('examples_less', function() {
  gulp.src('./examples_app/styles/*.less')
      .pipe(less())
      .pipe(minifyCSS())
      .pipe(gulp.dest('./examples_app/styles/'));
});

gulp.task('watch', function() {
  watch('examples_app/styles/*.less', function() {
    gulp.start('examples_less');
  })
});

gulp.task('build', function() {
  gulp.src('./styles/toolkit.scss')
      .pipe(sass())
      .pipe(minifyCSS())
      .pipe(gulp.dest('./dist/styles-toolkit/'+version+'/'));
});

gulp.task('deploy', function() {
    var config = JSON.parse(fs.readFileSync('./config/application.json'));
    gulp.src('./dist/**')
      .pipe(s3(config.aws));
});
