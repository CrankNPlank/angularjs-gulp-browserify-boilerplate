'use strict';

/**
 * @ngInject
 */
function homeConfig($stateProvider) {

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'HomeController as home',
      templateUrl: 'home/home.html',
      title: 'Home'
    });

}

module.exports = homeConfig;