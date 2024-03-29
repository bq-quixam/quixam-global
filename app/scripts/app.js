'use strict';

/**
 * @ngdoc overview
 * @name quixamGlobalApp
 * @description
 * # quixamGlobalApp
 *
 * Main module of the application.
 */
angular
  .module('quixamGlobalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
