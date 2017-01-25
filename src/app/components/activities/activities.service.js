function ActivitiesService (AppStorageService) {

  // save an activity
  this.saveActivity = function(activity) {
    return AppStorageService.saveActivity(activity);
  };

  // retrieve all activities
  this.getActivities = function () {
    return AppStorageService.getActivities();
  };

  // remove an activity
  this.removeActivity = function(activity) {
    return AppStorageService.destroyActivity(activity);
  };

  // remove all activities
  this.clearActivities = function () {
    return AppStorageService.destroyActivities();
  };
}

angular
  .module('components.activities')
  .service('ActivitiesService', ActivitiesService);
