'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['build:clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;

  runSequence(
    'build:styles',
    'build:images',
    'build:views',
    'build:browserify',
    'build:watch',
    cb
  );

});