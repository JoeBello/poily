function appState($locationProvider,
                  $stateProvider,
                  $urlRouterProvider,
                  $urlMatcherFactoryProvider) {
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/app');
    $urlMatcherFactoryProvider.caseInsensitive(true);

    $stateProvider
      .state('app', {
        url: '/app',
        component: 'app'
        });
  }

module.exports = appState;
