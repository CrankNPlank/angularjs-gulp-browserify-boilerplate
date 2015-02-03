'use strict';

var angular = require('angular');

// Define the list of components here
require('./example/_index');
require('./navbar/_index');
require('./footer/_index');

// Add components here for AngularJS DI bootstrapping
var requires = [
  'app.components.example',
  'app.components.navbar',
  'app.components.footer'
];

module.exports = angular.module('app.components', requires);