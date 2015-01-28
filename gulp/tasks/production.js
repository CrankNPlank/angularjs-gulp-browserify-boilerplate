'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', ['build:clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = true;

  runSequence(
    'build:styles',
    'build:images',
    'build:views',
    'build:browserify',
    cb
  );

});