function PlacesController (ActivityService) {
  var ctrl = this;
  var places = ctrl.places;

  ctrl.addToActivities = function (event) {
    console.log('from place, to places, to console (agenda)...')
    ActivityService.addActivity(event.place);
  };


}

angular
  .module('components.place')
  .controller('PlacesController', PlacesController);
