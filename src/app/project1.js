'use strict';

angular.module('root', [
  'ui.router',
  'ngAnimate',

  // 'project1.common'
])
  .constant('ENDPOINT', 'http://localhost:3000/api')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/hello',
        component: 'navigation.component'
        })
      .state('explore', {
        url: '/explore',
        templateUrl: 'app/explore/explore.tmpl.html',
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
        templateUrl: 'app/agenda/agenda.tmpl.html',
        controller: 'AgendaCtrl',
        controllerAs: 'agenda'
      })
  });
