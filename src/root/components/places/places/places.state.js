function placesState($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('places', {
      parent: 'app',
      url: '/?location&radius&type',
      views: {
        main: {
          component: 'places',
        }
      },
      resolve: {
        places: function($transition$, LocationFactory, PlacesFactory) {
          if (!$transition$.params().location) {
            return LocationFactory.geolocate()
            .then(function(coordinates) {
              var searchParams = angular.copy($transition$.params());
              searchParams.location = coordinates;
              return PlacesFactory.searchNewPlaces(searchParams);
            })
            .catch(function(error) {
              return error;
            });
          }

          return PlacesFactory.searchNewPlaces($transition$.params());
        }
      }
    });
}

module.exports = placesState;
