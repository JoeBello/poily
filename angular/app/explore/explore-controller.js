'use strict';

angular.module('project1')
  .controller('ExploreCtrl', function () {
    var explore = this;

    explore.userSearch = {
      latitude: '',
      longitude: '',
      radius: '',
      type: '',
      nextpagetoken: ''
    };



  });
