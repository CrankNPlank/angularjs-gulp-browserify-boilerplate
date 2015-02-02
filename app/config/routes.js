'use strict';

/**
 * @ngInject
 */
function Routes($locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

}

module.exports = Routes;