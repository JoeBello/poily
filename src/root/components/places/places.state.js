function placesState($stateProvider) {
  $stateProvider
    .state('places', {
      parent: 'app',
      url: '/places?location&radius&type',
      resolve: {
        places: function($stateParams, PlacesService) {
          delete $stateParams['#'];
          // console.log(PlacesService.searchPlaces($stateParams));
          return PlacesService.searchPlaces($stateParams);
        }
      },
      views: {
        main: {
          component: 'places',
        },
        right: {
          component: 'placesSearch'
        }
      }
    });
}

module.exports = placesState;
