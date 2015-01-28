'use strict';

var config = require('../config');
var gulp   = require('gulp');
var del    = require('del');

gulp.task('build:clean', function(cb) {

  del([config.dist.root], cb);

});
