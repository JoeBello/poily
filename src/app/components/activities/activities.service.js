function ActivitiesService (AppStorageService) {

  return {
    // retrieve all activities
    getActivities: function () {
      return AppStorageService.getActivities();
    },

    // remove an activity
    removeActivity: function(activity) {
      return AppStorageService.destroyActivity(activity);
    },

    // remove all activities
    clearActivities: function () {
      return AppStorageService.destroyActivities();
    }
  };
}

module.exports = ActivitiesService;
