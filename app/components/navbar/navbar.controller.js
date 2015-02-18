'use strict';

/**
 * @ngdoc controller
 * @name app.components.navbar.controller:NavbarController
 * @description Controller for the navbar module. Sets-up everything the view
 * needs to render the top navbar.
 * 
 * @ngInject
 */
function NavbarController() {

  // ViewModel
  var vm = this;

  vm.navCollapsed = true;

}

module.exports = NavbarController;