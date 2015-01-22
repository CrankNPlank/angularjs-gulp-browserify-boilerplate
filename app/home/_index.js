'use strict';

var angular = require('angular');

module.exports = angular
  .module('app.home', [])
  .config(require('./home.config.js'))
  .controller('HomeController',
    require('./home.controller.js'));