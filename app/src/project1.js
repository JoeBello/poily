'use strict';

angular.module('project1', [
  'ui.router',
  'ngAnimate',
  'project1.common'
])
  .constant('ENDPOINT', 'http://localhost:3000/api')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        component: 'mainNavigation'
        })
      .state('explore', {
        url: '/explore',
        templateUrl: 'src/explore/explore.tmpl.html',
        controller: 'ExploreCtrl',
        controllerAs: 'explore',
        resolve: {
          placesResolved: function (PlacesModel) {
            return PlacesModel.defaultSearch();
          }
        }
      })
      .state('explore.schedule', {
        url: '/schedule',
        templateUrl: 'src/agenda/agenda.tmpl.html',
        controller: 'AgendaCtrl',
        controllerAs: 'agenda'
      })
  });
