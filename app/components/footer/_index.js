'use strict';

var angular = require('angular');

/**
 * @ngdoc overview
 * @name app.components.footer
 * @description Bootstrapper for the footer module
 */
module.exports = angular.module('app.components.footer', [])
  .controller('FooterController',
    require('./footer.controller'));