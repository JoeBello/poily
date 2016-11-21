'use strict';

angular.module('project1')
  .controller('ExploreCtrl', function (PlacesModel) {
    var explore = this;

    explore.userSearch = {
      latitude: '',
      longitude: '',
      radius: '',
      type: ''
    };

    explore.results = {};

    explore.geo = function () {
      PlacesModel.defaultSearch()
      .then(function (result) {
        console.log('SUCCESS!');
        console.log(result);
      });


    };
    
  });
