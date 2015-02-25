'use strict';

var config          = require('../config');
var gulp            = require('gulp');
var ngdocs           = require('gulp-ngdocs');

gulp.task('build:document', ['build:clean:docs'], function () {

  var options = {
    html5Mode: true,
    startPage: '/api',
    title: 'Neeto Auto-Gen API ngDocs',
    titleLink: '/api'
  }

  return gulp.src(config.scripts.src)
    .pipe(ngdocs.process(options))
    .pipe(gulp.dest(config.document.dest));
});