function AppState($locationProvider, $stateProvider, cfpLoadingBarProvider) {
  $locationProvider.html5Mode(true);

  cfpLoadingBarProvider.includeSpinner = false;

  $stateProvider
    .state('app', {
      abstract: true,
      component: 'app'
    });
}

module.exports = AppState;
