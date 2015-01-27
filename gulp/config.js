'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'app/**/*.scss',
    'dest': 'build'
  },

  'scripts': {
    'src' : 'app/**/*.js',
    'dest': 'build'
  },

  'images': {
    'src' : 'app/images/**/*',
    'dest': 'build/images'
  },

  'views': {
    'watch': 'app/**/*.html',
    'src': [
      'app/**/*.html',
      '!app/index.html'
    ],
    'dest': 'app'
  },

  'dist': {
    'root'  : 'build'
  },

  'browserify': {
    'entries'   : ['./app/app.js'],
    'bundleName': 'app.js'
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};