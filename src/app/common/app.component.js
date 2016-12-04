var app = {
  templateUrl: 'app/common/app.html'
};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        component: 'app'
    });
  });
