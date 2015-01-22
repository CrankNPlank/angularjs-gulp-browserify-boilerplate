'use strict';

/**
 * @ngdoc controller
 * @name app.home.HomeController
 * @function
 * @module app.home
 */

/**
 * @ngInject
 */
function HomeController() {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;

}

module.exports = HomeController;