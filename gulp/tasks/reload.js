'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('build:reload', function () {

  browserSync.reload();

});