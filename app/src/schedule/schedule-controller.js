'use strict';

angular.module('project1')
  .controller('ScheduleCtrl', function ($state, ScheduleModel) {
    var schedule = this;

    schedule.items = ScheduleModel.getSchedule();

    schedule.remove = function (item) {
      ScheduleModel.removeItem(item);
    }

    schedule.putAway = function() {
      $state.go('explore');
    }

  })
