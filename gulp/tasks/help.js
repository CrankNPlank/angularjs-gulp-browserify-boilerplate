'use strict';

var gulp        = require('gulp');
var taskListing = require('gulp-task-listing');

// Output all tasks
gulp.task('help', taskListing);