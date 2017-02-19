var common = angular.module('common', [
    'ui.router',
    'ngStorage'
  ])
  .factory('AppStorageService', require('./app-storage.service'))
  .component('app', require('./app.component'))
  .component('appNav', require('./app-nav.component'))
  .config(function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $urlRouterProvider.otherwise('/app');

    $urlMatcherFactoryProvider.caseInsensitive(true);

    $stateProvider
      .state('app', {
        url: '/app',
        component: 'app'
        });
  });

module.exports = common.name;
