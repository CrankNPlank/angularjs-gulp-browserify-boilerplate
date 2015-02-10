/* global angular */

'use strict';

describe('Unit: FooterController', function () {

  var ctrl;

  beforeEach(function () {
    // Intantiate the app module
    angular.mock.module('app');

    // Mock the controller
    angular.mock.inject(function ($controller) {
      ctrl = $controller('FooterController');
    });
  });

  it('should exist', function () {
    expect(ctrl).toBeDefined();
  });

  describe('vm.date', function () {

    it('should have a variable "date" with a value of the current date',
      function () {
        var testDate = new Date();

        expect(ctrl.date).toBeDefined();
        expect(ctrl.date).toEqual(testDate);
      }
    );

  });

})