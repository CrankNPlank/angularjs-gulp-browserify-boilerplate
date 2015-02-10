/* global angular */

'use strict';

describe('Unit: NavbarController', function () {

  var ctrl;

  beforeEach(function () {
    // Intantiate the app module
    angular.mock.module('app');

    // Mock the controller
    angular.mock.inject(function ($controller) {
      ctrl = $controller('NavbarController');
    });
  });

  it('should exist', function () {
    expect(ctrl).toBeDefined();
  });

  it('should have a nav variable "navCollapsed" set to true by default',
    function () {
      expect(ctrl.navCollapsed).toEqual(true);
    }
  );

})