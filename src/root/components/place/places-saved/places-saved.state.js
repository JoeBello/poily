function PlacesSavedState($stateProvider) {
  $stateProvider
    .state('saved', {
      parent: 'app',
      resolve: {
        places: function placesResolve(PlaceFactory) {
          return PlaceFactory.getSavedPlaces();
        }
      },
      url: '/saved',
      views: {
        main: {
          component: 'placesSaved',
        }
      }
    });
}

module.exports = PlacesSavedState;
