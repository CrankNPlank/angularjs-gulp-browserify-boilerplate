'use strict';

var angular = require('angular');

// Define the list of components here
require('./example/_index.js');

var requires = [
  'app.components.example'
];

module.exports = angular.module('app.components', requires);