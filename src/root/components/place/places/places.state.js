function PlacesState($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('places', {
      params: {
        error: null,
        location: null,
        type: null,
        radius: null
      },
      parent: 'app',
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
      url: '/',
      views: {
        main: {
          component: 'places',
        }
      }
    });
}

module.exports = PlacesState;
