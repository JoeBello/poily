var places = {
  bindings: {
    places: '<'
  },
  templateUrl: 'app/components/places/places/places.html',
  controller: 'PlacesController'
};

angular
  .module('components.places')
  .component('places', places)
  .config(function($stateProvider) {
    $stateProvider
      .state('places', {
        parent: 'app',
        url: '/places?zipcode&radius&type',
        resolve: {
          places: function($stateParams, PlacesService) {
            if ($stateParams.zipcode) {
              var placesParams = {
                zipcode: $stateParams.zipcode,
                radius: $stateParams.radius,
                type: $stateParams.type
              };
              return PlacesService.searchPlaces(placesParams);
            } else {
              return PlacesService.geolocatePlaces();
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
