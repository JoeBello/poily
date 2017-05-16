function PlacesState($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('places', {
      parent: 'app',
      resolve: {
        places: function placesResolve($transition$, LocationFactory,
                                        PlaceFactory) {
          if (!$transition$.params().location) {
            return LocationFactory.geolocate()
              .then(function(coordinates) {
                var searchParams = angular.copy($transition$.params());
                searchParams.location = coordinates;
                return PlaceFactory.getPlaces(searchParams);
              });
          }
          return PlaceFactory.getPlaces($transition$.params());
        }
      },
      url: '/?location&type&radius',
      views: {
        main: {
          component: 'places',
        }
      }
    });
}

module.exports = PlacesState;
