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
        url: '/places?adress&zipcode&radius&type',
        component: 'places',
        resolve: {
          places: function($stateParams, PlaceService) {
            if ($stateParams.zipcode) {
              var placesParams = {
                zipcode: $stateParams.zipcode,
                radius: $stateParams.radius || '',
                type: $stateParams.type || ''
              };
              return PlaceService.searchPlaces(placesParams);
            } else {
              return PlaceService.geolocatePlaces();
            }
          }
        }
      });
  });
