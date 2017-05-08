function PlacesState($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('places', {
      parent: 'app',
      resolve: {
        places: function($transition$, LocationFactory, PlaceFactory) {
          if (!$transition$.params().location) {
            return LocationFactory.geolocate()
              .then(function(coordinates) {
                var searchParams = angular.copy($transition$.params());
                searchParams.location = coordinates;
                return PlaceFactory.searchNewPlaces(searchParams);
              })
              .catch(function(error) {
                return error;
              });
          }

          return PlaceFactory.searchNewPlaces($transition$.params());
        }
      },
      url: '/?location&radius&type',
      views: {
        main: {
          component: 'places',
        }
      }
    });
}

module.exports = PlacesState;
