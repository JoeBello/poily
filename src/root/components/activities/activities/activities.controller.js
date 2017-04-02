function ActivitiesController(ActivitiesService) {
  var ctrl = this;

  ctrl.hasActivities = function() {
    return ctrl.activities.length > 0;
  };

  ctrl.clearActivities = function() {
    ActivitiesService.destroyActivities();
  };

  ctrl.removeActivity = function(event) {
    var activity = event.activity;
    ActivitiesService.destroyActivity(activity);
  };

}

module.exports = ActivitiesController;
