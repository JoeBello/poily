var app = {
  templateUrl: 'app/common/app.html'
};

angular
  .module('common')
  .component('app', app)
  .constant('API', {
    'places': 'http://localhost:3000/api/places?',
    'userPlaces': 'http://localhost:3000/api/userPlaces?'
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        component: 'app'
    });
  });
