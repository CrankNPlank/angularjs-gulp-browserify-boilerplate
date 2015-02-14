'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

// Run the full test suite: unit and e2e
gulp.task('test', ['build:server'], function () {

  runSequence('test:unit', 'build:browserify', 'test:protractor');

});

// Only run our unit tests
gulp.task('test-unit-suite', ['build:server'], function () {

  runSequence('test:unit');

});

// Only run our e2e tests
gulp.task('test-e2e-suite', ['build:server'], function () {

  runSequence('build:browserify', 'test:protractor');

});