'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('test', ['build:server'], function() {

  runSequence('test:unit', 'build:browserify', 'test:protractor');

});