'use strict';

var config          = require('../config');
var gulp            = require('gulp');
var ngdocs           = require('gulp-ngdocs');

gulp.task('build:document', ['build:clean:docs'], function () {
  return gulp.src(config.scripts.src)
    .pipe(ngdocs.process())
    .pipe(gulp.dest(config.document.dest));
});