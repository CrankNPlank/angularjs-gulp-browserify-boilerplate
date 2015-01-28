'use strict';

var gulp            = require('gulp');
var protractor      = require('gulp-protractor').protractor;
var webdriver       = require('gulp-protractor').webdriver;
var webdriverUpdate = require('gulp-protractor').webdriver_update;
var config          = require('../config');

gulp.task('test:webdriver-update', webdriverUpdate);
gulp.task('test:webdriver', webdriver);

gulp.task('test:protractor', ['test:webdriver-update', 'test:webdriver', 'build:server'], function() {

  return gulp.src('test/e2e/**/*.js')
    .pipe(protractor({
        configFile: config.test.protractor,
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });

});