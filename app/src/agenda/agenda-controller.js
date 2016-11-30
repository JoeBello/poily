'use strict';

angular.module('project1')
  .controller('AgendaCtrl', function ($state, AgendaModel) {
    var agenda = this;

    agenda.items = AgendaModel.getSchedule();

    agenda.remove = function (item) {
      AgendaModel.removeItem(item);
    }

    agenda.putAway = function() {
      $state.go('explore');
    }

  })
