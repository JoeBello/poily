function ActivitesController (ActivityService) {
  var ctrl = this;
  var activities = ctrl.activities;

  // TODO refactor clearList() in activity service
  ctrl.removeActivities = function () {
    ActivityService.clearList();
  };

  ctrl.removeActivity = function (activity) {
    ActivityService.removeActivity(activity);
  }

}

angular
  .module('components.activity')
  .controller('ActivitesController', ActivitesController);
