'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeController as home',
    templateUrl: 'home/home.html',
    title: 'Home'
  });

  $urlRouterProvider.otherwise('/');

}

module.exports = Routes;