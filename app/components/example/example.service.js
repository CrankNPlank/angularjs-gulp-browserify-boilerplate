'use strict';

/**
 * @ngdoc service
 * @name app.components.example.service:exampleService
 * @requires $http
 * @requires $q
 * @description An example service that returns a promise for an http
 * GET request
 * 
 * @ngInject
 */
function exampleService($q, $http) {

  var service = {};

  /**
   * @ngdoc method
   * @name exampleService#get
   * @methodOf app.components.example.service:exampleService
   * @description This is a simple example method that demonstrates the use of
   * the $q and $http services to create a deferred promise
   * 
   * @return {object} Returns a promise that will be fulfilled with the results
   * of the $http.get request, once completed
   */
  service.get = function () {
    var deferred = $q.defer();

    $http.get('apiPath').success(function (data) {
        deferred.resolve(data);
    }).error(function (err, status) {
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

module.exports = exampleService;