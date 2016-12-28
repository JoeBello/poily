function PlacesController (ActivityService) {
  var ctrl = this;
  var places = ctrl.places;

  ctrl.addActivity = function (event) {
    // TODO $onInit
    var place = event.place;
    var activity = {
      name: place.name,
      location: place.vicinity,
      id: place.place_id
    }
    ActivityService.addActivity(activity);
    ActivityService.listActivities();
  };


}

angular
  .module('components.place')
  .controller('PlacesController', PlacesController);
