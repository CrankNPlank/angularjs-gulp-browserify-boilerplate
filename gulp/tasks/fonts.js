'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var filter  = require('gulp-filter');
var flatten = require('gulp-flatten');

gulp.task('build:fonts', function () {

  var dest = config.fonts.dest;

  return gulp.src(config.fonts.src)
    .pipe(filter('**/*.{eot,svg,ttf,woff}'))
    .pipe(flatten())
    .pipe(gulp.dest(dest));
});