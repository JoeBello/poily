function ActivityService () {
  var testStorage = [];

  function showActivities () {
    for (var i = 0; i < testStorage.length; i++) {
        showActivity(i);
    }
  }

  function showActivity(num) {
    console.log(testStorage[num]);
  }

  return {
    getActivityList: function () {
      return testStorage;
    },
    addActivity: function (activity) {
      testStorage.push(activity);
    },
    listActivities: function () {
      showActivities();
    }
  }
}

angular
  .module('components.activity')
  .service('ActivityService', ActivityService);
