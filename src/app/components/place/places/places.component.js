var places = {
  bindings: {
    places: '<'
  },
  templateUrl: 'app/components/place/places/places.html',
  controller: 'PlacesController'
};

angular
  .module('components.place')
  .component('places', places)
  .config(function($stateProvider) {
    $stateProvider
      .state('places', {
        parent: 'app',
        url: '/places?zipcode&radius&type',
        resolve: {
          places: function($stateParams, PlaceService) {
            if ($stateParams.zipcode) {
              var placesParams = {
                zipcode: $stateParams.zipcode,
                radius: $stateParams.radius,
                type: $stateParams.type
              };
              return PlaceService.searchPlaces(placesParams);
            } else {
              return PlaceService.geolocatePlaces();
            }
          }
        },
        views: {
          'filters': {
            template: 'filters'
          },
          'main':{
            component: 'places'
          }
        }
      });
  })
  .run(function($localStorage) {
    var project1 = $localStorage.project1;
    project1.coordinates = project1.coordinates || [];
  });
