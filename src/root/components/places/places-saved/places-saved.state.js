function placesSavedState($stateProvider) {
  $stateProvider
    .state('saved', {
      parent: 'app',
      url: '/saved',
      views: {
        main: {
          component: 'placesSaved',
        }
      },
      resolve: {
        places: function(PlacesFactory) {
          return PlacesFactory.getSavedPlaces();
        }
      }
    });
}

module.exports = placesSavedState;
