require('newrelic'); // Ansible requires apps in production to be on NewRelic

var gulp = require('gulp');
var s3 = require('gulp-s3');
var fs = require('fs');

gulp.task('deploy', function() {
    var config = JSON.parse(fs.readFileSync('./config/application.json'));
    gulp.src('./dist/**')
      .pipe(s3(config.aws));
});
