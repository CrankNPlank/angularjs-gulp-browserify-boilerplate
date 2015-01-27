'use strict';

var exampleModule = require('./_index.js');

/**
 * @ngInject
 */
function exampleService($q, $http) {

  var service = {};

  service.get = function() {
    var deferred = $q.defer();

    $http.get('apiPath').success(function(data) {
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

exampleModule.service('exampleService', exampleService);