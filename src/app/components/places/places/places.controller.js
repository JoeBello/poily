function PlacesController (ActivitiesService, $state) {
  // TODO $onInit
  var ctrl = this,
      places = ctrl.places;

  if (places.error) {
    $state.go('search', {error: places.error});
  }

  ctrl.addActivity = function (event) {
    var place = event.place,
        activity = {
          name: place.name,
          location: place.vicinity,
          id: place.place_id
        };

    ActivitiesService.saveActivity(activity);
  };
}

angular
  .module('components.places')
  .controller('PlacesController', PlacesController);
