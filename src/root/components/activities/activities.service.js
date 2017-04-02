function ActivitiesService ($localStorage, $rootScope) {
  return {
    // save an activity
    saveActivity: function(activity) {
      var activities = $localStorage.project1.activities;
      activities.push(activity);
      return $rootScope.$broadcast('stop_change', activities);
    },
    // retrieve all activities
    getActivities: function() {
      return $localStorage.project1.activities;
    },
    // remove an activity
    destroyActivity: function(activity) {
      var activities = $localStorage.project1.activities;

      activities.splice(activities.indexOf(activity), 1);
      return $rootScope.$broadcast('stop_change', activities);
    },
    // remove all activities
    destroyActivities: function() {
      var activities = $localStorage.project1.activities;
      activities.splice(0, activities.length);
      return $rootScope.$broadcast('stop_change', activities);
    }
  };
}

module.exports = ActivitiesService;
