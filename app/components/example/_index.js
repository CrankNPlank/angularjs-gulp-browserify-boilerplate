'use strict';

var angular = require('angular');

/**
 * @ngdoc overview
 * @name app.components.example
 * @description Bootstrapper for the example module. The example module simply
 * demonstrates the creation and usage of a service and directive as
 * components of a larger module within the application. Typically, there would
 * also be a controller for the directive, and perhaps filters, etc.
 */
module.exports = angular.module('app.components.example', [])
  .directive('exampleDirective',
    require('./example.directive'))
  .service('exampleService',
    require('./example.service'));