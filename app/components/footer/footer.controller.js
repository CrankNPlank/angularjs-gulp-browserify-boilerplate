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

  /**
   * @ngdoc property
   * @name FooterController#vm
   * @propertyOf app.components.footer.controller:FooterController
   * @description The `vm` property is used to set `this` for the controller
   * in a namespace specific to the controller, in order to expose properties to views
   * in lieu of `$scope` ala `Controller As` syntax
   */
  var vm = this;

  /**
   * @ngdoc property
   * @name FooterController#vm.date
   * @propertyOf app.components.footer.controller:FooterController
   * @description The `vm.date` property is assigned a current date object, and
   * is used to render the copyright year in the footer template
   */
  vm.date = new Date();

}

module.exports = FooterController;