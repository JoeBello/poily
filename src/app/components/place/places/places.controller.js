function PlacesController () {
  var ctrl = this;
  var places = ctrl.places;

  ctrl.addToAgenda = function (event) {
    console.log('from place, to places, to console (agenda)...')
    // TODO add to activities
  };

  ctrl.remove = function (event) {
    console.log('removed...');
    console.log(event.place);
    for (var i = 0; i < places.length; i++) {
      if (places[i].name === event.place.name) {
        places.splice(i, 1);
      }
    }
  }
}

angular
  .module('components.place')
  .controller('PlacesController', PlacesController);
