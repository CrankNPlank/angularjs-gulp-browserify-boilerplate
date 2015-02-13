'use strict';

module.exports = function(config) {

  config.set({

    basePath: '../',
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'app/**/*.js': ['browserify']
    },
    browsers: [/*'Chrome', */'PhantomJS'],
    reporters: ['progress'],

    autoWatch: true,

    plugins: [
      'karma-bro',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-phantomjs-launcher'
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