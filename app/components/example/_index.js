'use strict';

var angular = require('angular');

module.exports = angular.module('app.components.example', [])
  .directive('exampleDirective',
    require('./example.directive'))
  .service('exampleService',
    require('./example.service'));