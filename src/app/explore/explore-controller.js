'use strict';

angular.module('project1')
  .controller('ExploreCtrl', function (placesResolved, AgendaModel, $state) {
    var explore = this;

    explore.userSearch = {
      latitude: '',
      longitude: '',
      radius: '',
      type: '',
      nextpagetoken: ''
    };

    explore.places = placesResolved.results;
    explore.nextpagetoken = placesResolved.next_page_token;

    explore.addToSchedule = function (place) {
      // alert(place.name);
      // alert(place.id);
      // // adder({ place.name: place.id })
      // $state.go('explore.schedule');
      var placeStore = {
        name: place.name,
        id: place.id
      };

      AgendaModel.addItem(placeStore);
    }

    // AgendaModel.addItem()
  });
