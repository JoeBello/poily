function ActivitiesController (ActivityService) {
  var ctrl = this;
  var activities = ctrl.activities;

  ctrl.clearActivities = function () {
    ActivityService.clearActivities();
  };

  ctrl.removeActivity = function (event) {
    var activity = event.activity;
    ActivityService.removeActivity(activity);
  };

}

angular
  .module('components.activity')
  .controller('ActivitiesController', ActivitiesController);
