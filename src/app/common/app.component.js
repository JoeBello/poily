var app = {
  template: '<app-nav></app-nav>'
}

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        component: 'app'
    })
  });
