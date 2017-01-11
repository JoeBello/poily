function PlacesController (ActivityService, $state, $stateParams, $scope, PlaceService) {
  var ctrl = this,
      places = ctrl.places;

  if (places.error) {
    console.log(places.error);
    // state.go with params - send message to return to user about redirect
    $state.go('search');
  }


  ctrl.addActivity = function (event) {
    // TODO $onInit
    var place = event.place;
    var activity = {
      name: place.name,
      location: place.vicinity,
      id: place.place_id
    };
    // ActivityService.addActivity(activity);
    // ActivityService.listActivities();
  };
}

angular
  .module('components.place')
  .controller('PlacesController', PlacesController);
