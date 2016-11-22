'use strict';

angular.module('project1')
  .controller('ExploreCtrl', function (PlacesModel, places) {
    var explore = this;

    explore.places = places.results;

    explore.nextpagetoken = places.next_page_token;

    explore.userSearch = {
      latitude: '',
      longitude: '',
      radius: '',
      type: '',
      nextpagetoken: ''
    };



  });
