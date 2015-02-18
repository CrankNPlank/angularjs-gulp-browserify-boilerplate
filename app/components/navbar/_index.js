'use strict';

var angular = require('angular');

/**
 * @ngdoc overview
 * @name app.components.navbar
 * @description Bootstrapper for the navbar module
 */
module.exports = angular.module('app.components.navbar', [])
  .controller('NavbarController',
    require('./navbar.controller'));