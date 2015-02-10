'use strict';

module.exports = function(config) {

  config.set({

    basePath: '../',
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'app/**/*.js': ['coverage', 'browserify']
    },
    browsers: ['Chrome'],
    reporters: ['progress', 'coverage'],

    autoWatch: true,

    plugins: [
      'karma-jasmine',
      'karma-bro',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ],

    proxies: {
      '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    files: [
      // 3rd-party resources
      'node_modules/angular-mocks/angular-mocks.js',

      // app-specific code
      'app/app.js',

      // test files
      'test/unit/**/*.js'
    ]

  });

};