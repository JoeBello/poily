function ActivitiesController(ActivitiesService) {
  var ctrl = this;

  ctrl.hasActivities = function() {
    return ctrl.activities.length > 0;
  };

  ctrl.clearActivities = function() {
    ActivitiesService.clearActivities();
  };

  ctrl.removeActivity = function(event) {
    var activity = event.activity;
    ActivitiesService.removeActivity(activity);
  };

}

module.exports = ActivitiesController;
