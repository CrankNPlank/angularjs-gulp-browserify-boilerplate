'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', ['build:clean', 'build:document'], function (cb) {

  cb = cb || function () {};

  global.isProd = true;

  runSequence(
    'build:styles:app',
    'build:styles:vendor',
    'build:fonts',
    'build:images',
    'build:views',
    'build:browserify',
    cb
  );

});