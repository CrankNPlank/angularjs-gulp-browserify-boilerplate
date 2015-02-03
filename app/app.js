'use strict';

var angular = require('angular');

// Angular modules
require('angular-ui-router');
require('angular-bootstrap');

// App modules
require('./templates');
require('./home/_index');
require('./components/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'ui.bootstrap',
    'templates',
    'app.home',
    'app.components'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app')
    .constant('AppSettings', require('./config/constants'))
    .config(require('./config/routes'))
    .run(require('./config/on_run'));

  angular.bootstrap(document, ['app']);

});