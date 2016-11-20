'use strict';

angular.module('project1')
  .controller('ExploreCtrl', function (PlacesModel) {
    var explore = this;

    explore.header = 'Where would you like to be?';

    explore.userSearch = {
      latitude: '',
      longitude: '',
      radius: 5,
      type: 'bank'
    };

    explore.results = {};

    // TODO search submission needs to be a service, its used for random
    // searching upon user arrival, filtered searches, and user searches

    navigator.geolocation.getCurrentPosition(function(position) {
      var coords = position.coords;
      explore.userSearch.latitude = coords.latitude;
      explore.userSearch.longitude = coords.longitude;
      console.log(explore.userLocation);
      PlacesModel.search(explore.userSearch)
      .then(function(result) {
        console.log('SUCCESS!')
        explore.results = result.results;
        console.log(explore.results);

      })
    });

  });
