'use strict';

var config        = require('../config');
var gulp          = require('gulp');

gulp.task('build:watch', ['build:browserSync', 'build:server'], function() {

  gulp.watch(config.scripts.src, ['build:lint', 'build:browserify']);
  gulp.watch(config.styles.src,  ['build:styles']);
  gulp.watch(config.images.src,  ['build:images', 'build:reload']);
  gulp.watch(config.views.watch, ['build:views']);

});