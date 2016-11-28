'use strict';

angular.module('project1')
  .service('ScheduleModel', function($state) {
    var service = this,
        schedule = [];

    // TODO items need to be stored in localstorage

    service.getSchedule = function() {
      return schedule
    };

    service.addItem = function (item) {
      if (item.name && item.id) {
        schedule.push(item);
        $state.go('explore.schedule')
      }
    };

    service.removeItem = function (item) {
      for (var index = 0; index < schedule.length; index++) {
        if (schedule[index].name === item.name) {
          schedule.splice(index, 1);
        }
      }
    };


  })
