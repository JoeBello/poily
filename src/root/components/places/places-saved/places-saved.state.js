function placesSavedState($stateProvider) {
  $stateProvider
    .state('saved', {
      parent: 'app',
      resolve: {
        places: function(PlacesFactory) {
          return PlacesFactory.getSavedPlaces();
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

module.exports = placesSavedState;
