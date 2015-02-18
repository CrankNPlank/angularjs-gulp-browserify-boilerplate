'use strict';

var angular = require('angular');

/**
 * @ngdoc overview
 * @name app.home
 * @description Bootstrapper for the home module
 */
module.exports = angular.module('app.home', [])
  .config(require('./home.config'))
  .controller('HomeController',
    require('./home.controller'));