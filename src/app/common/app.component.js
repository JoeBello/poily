var app = {
  templateUrl: 'app/common/app.html'
};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $urlRouterProvider.otherwise('/app');

    $urlMatcherFactoryProvider.caseInsensitive(true);

    $stateProvider
      .state('app', {
        redirectTo: 'places',
        url: '/app',
        component: 'app'
        });
  });
