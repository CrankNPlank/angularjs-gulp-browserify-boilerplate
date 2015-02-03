'use strict';

var angular = require('angular');

module.exports = angular.module('app.components.footer', [])
  .controller('FooterController',
    require('./footer.controller'));