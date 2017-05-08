function AppState($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('app', {
      abstract: true,
      component: 'app',
      url: ''
    });
}

module.exports = AppState;
