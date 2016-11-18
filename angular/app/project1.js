'use strict';

angular.module('project1', [
  'ui.router',
  'project1.common'
])
  .constant('ENDPOINT', 'http://localhost:3000/api')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.tmpl.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('explore', {
        url: '/explore',
        templateUrl: 'app/explore/explore.tmpl.html',
        controller: 'ExploreCtrl',
        controllerAs: 'explore'
      });
  });
// END PROJECT WIDE CONFIGURATION OF ROUTING AND ENDPOINTS
