var placesSearch = {
  bindings: {
    error: '<'
  },
  templateUrl:  'app/components/places/places-search/places-search.html',
  controller: 'PlacesSearchController'
};

angular
  .module('components.places')
  .component('placesSearch', placesSearch)
  .config(function($stateProvider) {
    $stateProvider
      .state('search', {
        parent: 'app',
        url: '/search',
        params: {
          error: null
        },
        resolve: {
          error: function ($stateParams) {
            return $stateParams.error;
          }
        },
        views: {
          'main': {
            component: 'placesSearch'
          }
        }
      });
  })
  .run(function($localStorage) {
    $localStorage.project1.places.lastSearch = $localStorage.project1.places.lastSearch || [];
  })
