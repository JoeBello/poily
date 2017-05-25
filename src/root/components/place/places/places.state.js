function PlacesState($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('places', {
      parent: 'app',
      params: {
        error: null
      },
      resolve: {
        places: function placesResolve($transition$, LocationFactory,
                                        PlaceFactory) {
          var params = $transition$.params();

          if (params.error) {
            return params.error;
          }

          if (params.location) {
            return PlaceFactory.getPlaces(params);
          } else {
            return LocationFactory.geolocate()
              .then(function(coordinates) {
                var searchParams = {
                  location: coordinates,
                  type: params.type || ''
                };
                return PlaceFactory.getPlaces(searchParams);
              })
              .catch(function(error) {
                return error;
              });
          }
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
