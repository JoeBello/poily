function appState($stateProvider,
                  $urlRouterProvider,
                  $urlMatcherFactoryProvider) {
    $urlRouterProvider.otherwise('/app');

    $urlMatcherFactoryProvider.caseInsensitive(true);

    $stateProvider
      .state('app', {
        url: '/app',
        component: 'app'
        });
  }

module.exports = appState;
