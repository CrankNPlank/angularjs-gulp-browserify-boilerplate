'use strict';

/**
 * @ngInject
 */
function HomeController() {

  // ViewModel
  var vm = this;

  vm.number = 1234;
  vm.title = 'AngularJS, Gulp, and Browserify!';

}

module.exports = HomeController;