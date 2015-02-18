'use strict';

/**
 * @ngdoc directive
 * @name app.components.example.directive:exampleDirective
 * @restrict EA
 * @description An example directive that simply logs the message "element
 * clicked" when the element to which the directive is applied is clicked
 * 
 * @ngInject
 */
function exampleDirective() {

  return {
    restrict: 'EA',
    link: function ($scope, $element) {
      /**
       * @ngdoc method
       * @name  exampleDirective#$element.on('click')
       * @methodOf app.components.example.directive:exampleDirective
       * @description When the given element is clicked, a message is logged
       * that simply states "element clicked"
       */
      $element.on('click', function () {
        console.log('element clicked');
      });
    }
  };

}

module.exports = exampleDirective;