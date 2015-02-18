'use strict';

var config        = require('../config');
var gulp          = require('gulp');

gulp.task('build:watch', ['build:browserSync', 'build:server'], function () {

  gulp.watch(config.scripts.src,
    ['build:document', 'build:lint', 'build:browserify']);
  gulp.watch(config.styles.srcApp,
    ['build:styles:app', 'build:fonts']);
  gulp.watch(config.styles.srcVend,
    ['build:styles:vendor', 'build:fonts']);
  gulp.watch(config.images.src,
    ['build:images', 'build:reload']);
  gulp.watch(config.views.watch,
    ['build:views', 'build:fonts']);

});