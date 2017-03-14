function placesState($stateProvider) {
  $stateProvider
    .state('places', {
      parent: 'app',
      url: '/places?zipcode&latitude&longitude&radius&type',
      resolve: {
        places: function($stateParams, PlacesService) {
          if ($stateParams.zipcode || ($stateParams.latitude && $stateParams.longitude))
          {
            return PlacesService.searchPlaces($stateParams);
          } else {
            return PlacesService.geolocatePlaces();
          }
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
