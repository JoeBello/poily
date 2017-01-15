var placeSearch = {
  bindings: {
    error: '<'
  },
  templateUrl:  'app/components/place/place-search/place-search.html',
  controller: 'PlaceSearchController'
};

angular
  .module('components.place')
  .component('placeSearch', placeSearch)
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
            component: 'placeSearch'  
          }
        }
      });
  });
