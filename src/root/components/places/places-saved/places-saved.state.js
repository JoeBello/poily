function placesSavedState($stateProvider) {
  $stateProvider
    .state('saved', {
      parent: 'app',
      url: '/saved',
      resolve: {
        places: function(PlacesFactory) {
          return PlacesFactory.getSavedPlaces();
        }
      },
      views: {
        main: {
          component: 'placesSaved',
        }
      }
    });
}

module.exports = placesSavedState;
