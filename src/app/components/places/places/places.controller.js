function PlacesController (PlacesService, ActivitiesService, $state, $localStorage) {
  // TODO $onInit
  var ctrl = this,
      lastSearch = $localStorage.project1.places.lastSearch;

  if (ctrl.places.error) {
    $state.go('search', {error: ctrl.places.error});
  }

  ctrl.pageToken = lastSearch.pageToken || false;

  ctrl.addActivity = function (event) {
    var place = event.place,
        activity = {
          name: place.name,
          location: place.vicinity,
          id: place.place_id
        };

    ActivitiesService.saveActivity(activity);
  };

  ctrl.nextPage = function () {
    PlacesService.searchPlaces({
      pageToken: lastSearch.pageToken || '',
      latitude: lastSearch.latitude || '',
      longitude: lastSearch.longitude || '',
      zipcode: lastSearch.zipcode || '',
      radius: lastSearch.radius || '',
      type: lastSearch.type || ''
    })
    .then(function(response) {
      ctrl.places = ctrl.places.concat(response);
    })
    .catch(function(error) {
      $state.go('search', {error: error});
    });
  }
}

angular
  .module('components.places')
  .controller('PlacesController', PlacesController);
