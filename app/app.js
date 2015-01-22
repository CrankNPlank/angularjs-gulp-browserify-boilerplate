'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('./templates');
require('./components/_index');
require('./home/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',
    'app.components',
    'app.home'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', require('./config/constants'));

  angular.module('app').config(require('./config/routes'));

  angular.module('app').run(require('./config/on_run'));

  angular.bootstrap(document, ['app']);

});