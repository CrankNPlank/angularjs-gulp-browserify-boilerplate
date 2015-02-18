'use strict';

var angular = require('angular');

// Define the list of components here
require('./example/_index');
require('./navbar/_index');
require('./footer/_index');

// Add components here for AngularJS DI bootstrapping
var requires = [
  'app.components.example',
  'app.components.navbar',
  'app.components.footer'
];

/**
 * @ngdoc overview
 * @name app.components
 * @description Bootstrapper for the component modules. This is included in
 * application bootstrapping, so there's no need to include this module 
 * directly as part of your DI within the app.
 * 
 * To add a new module (outside of a state - or page - module, such as home,
 * about, etc.), require its bootstrap `_index.js` file in the list of
 * components in the `components/_index.js` file, then add it to the
 * component DI.
 *
 * @example
 * For example, if you created a new module named `yourModule` in
 * `components/yourModule/`, you would add it as a requirement in
 * __`components/_index.js`__ like so:
 * <pre>
 * ...
 * require('./yourModule/_index');
 * ...
 * </pre>
 * then, add it to the list of DI requires:
 * <pre>
 * var requires = [
 *   ...
 *   'app.components.yourModule'
 * ];
 * </pre>
 */
module.exports = angular.module('app.components', requires);