function ActivitiesController (ActivitiesService) {
  var ctrl = this;
  var activities = ctrl.activities;

  ctrl.clearActivities = function () {
    ActivitiesService.clearActivities();
  };

  ctrl.removeActivity = function (event) {
    var activity = event.activity;
    ActivitiesService.removeActivity(activity);
  };

}

angular
  .module('components.activities')
  .controller('ActivitiesController', ActivitiesController);
