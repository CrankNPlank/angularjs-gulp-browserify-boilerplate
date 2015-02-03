'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'srcApp' : ['app/**/*.scss', '!app/vendor.scss'],
    'srcVend' : 'app/vendor.scss',
    'dest': 'build'
  },

  'fonts': {
    'src' : 'node_modules/bootstrap-sass/assets/fonts/bootstrap/*',
    'dest': 'build/fonts'
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
  },

  'e2e': {
    'src': 'test/e2e/**/*.js'
  }

};