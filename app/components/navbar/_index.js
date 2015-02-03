'use strict';

var angular = require('angular');

module.exports = angular.module('app.components.navbar', [])
  .controller('NavbarController',
    require('./navbar.controller'));