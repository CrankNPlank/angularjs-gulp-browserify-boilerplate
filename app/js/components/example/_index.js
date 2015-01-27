'use strict';

var angular = require('angular');

module.exports = angular.module('app.components.example', []);

// Define the list of component modules here
require('./example.directive.js');
require('./example.service.js');