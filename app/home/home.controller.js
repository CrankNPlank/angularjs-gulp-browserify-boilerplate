'use strict';

/**
 * @ngdoc controller
 * @name  app.home.controller:HomeController
 * @description Controller for the home module. Sets-up everything the view
 * needs to render the homepage.
 * 
 * @ngInject
 */
function HomeController() {

  /** Set-up the view model */
  var vm = this;

  /** A static number for demonstration purposes */
  vm.number = 1234;

  /** The main title for the homepage */
  vm.title = 'AngularJS, Gulp, and Browserify!';

}

module.exports = HomeController;