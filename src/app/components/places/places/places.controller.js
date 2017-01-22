function PlacesController (PlacesService, ActivitiesService, $state, $localStorage) {
  var ctrl = this;

  ctrl.$onInit = function() {
    if (ctrl.places.error) {
      $state.go('search', {error: ctrl.places.error});
    } else {
      ctrl.lastSearch = $localStorage.project1.places.lastSearch;
      ctrl.pageToken = ctrl.lastSearch.pageToken || null;
    }
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

  ctrl.nextPage = function () {
    ctrl.lastSearch.pageToken = ctrl.pageToken || null;

    PlacesService.searchPlaces(ctrl.lastSearch)
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
