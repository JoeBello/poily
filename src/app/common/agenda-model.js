'use strict';

angular.module('project1')
  .service('AgendaModel', function($state) {
    var agenda = this,
        schedule = [];

    // TODO items need to be stored in localstorage

    agenda.getSchedule = function() {
      return schedule
    };

    agenda.addItem = function (item) {
      if (item.name && item.id) {
        schedule.push(item);
        $state.go('explore.schedule')
      }
    };

    agenda.removeItem = function (item) {
      for (var index = 0; index < schedule.length; index++) {
        if (schedule[index].name === item.name) {
          schedule.splice(index, 1);
        }
      }
    };


  })
