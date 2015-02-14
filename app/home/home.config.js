'use strict';

/**
 * State declarations
 */
var home = {
  name: 'home',
  url: '/',
  controller: 'HomeController as home',
  templateUrl: 'home/home.html',
  title: 'Home'
};

/*  @ngInject */
function homeConfig($stateProvider) {

  $stateProvider
    .state(home);

}

module.exports = homeConfig;