'use strict';

var angular = require('angular');

module.exports = angular.module('app.example', [])
  .directive('exampleDirective',
    require('./example.directive.js'))
  .service('exampleService',
    require('./example.service.js'));