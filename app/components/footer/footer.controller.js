'use strict';

/**
 * @ngdoc controller
 * @name app.components.footer.controller:FooterController
 * @description Controller for the footer module. Sets-up everything the view
 * needs to render the footer.
 * 
 * @ngInject
 */
function FooterController() {

  // ViewModel
  var vm = this;

  vm.date = new Date();

}

module.exports = FooterController;