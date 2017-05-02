function appState($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('app', {
        abstract: true,
        url: '',
        component: 'app'
        });
  }

module.exports = appState;
