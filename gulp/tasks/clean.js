'use strict';

var config = require('../config');
var gulp   = require('gulp');
var del    = require('del');

gulp.task('build:clean', function (cb) {

  del([config.dist.root], cb);

});

/** Delete the docs directory */
gulp.task('build:clean:docs', function (cb) {
  del([config.document.dest], cb);
});