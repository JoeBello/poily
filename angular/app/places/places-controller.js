'use strict';

angular.module('project1')
  .controller('PlacesCtrl', function (placesResolved) {
    var places = this;

    places.places = placesResolved.results;

    places.nextpagetoken = placesResolved.next_page_token;


  })
