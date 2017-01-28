function ActivitiesService (AppStorageService) {

  return {
    // save an activity
    saveActivity: function(activity) {
      return AppStorageService.saveActivity(activity);
    },

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

angular
  .module('components.activities')
  .service('ActivitiesService', ActivitiesService);
