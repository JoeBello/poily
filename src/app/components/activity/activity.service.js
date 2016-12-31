  function ActivityService ($localStorage) {
    var storage;

    if ($localStorage.activities) {
      storage = $localStorage.activities;
    } else {
      storage = $localStorage.activities = [];
    }

    function showActivities () {
      for (var i = 0; i < storage.length; i++) {
          showActivity(i);
      }
    }

    function showActivity(num) {
      console.log(storage[num]);
    }

    function removeActivity(activity) {
      for (var i = 0; i < storage.length; i++) {
        if (storage[i].name === activity.name) {
          storage.splice(i, 1);
        }
      }
    }

    function clearStorage() {
      $localStorage.$reset();
    }

    return {
      getActivityList: function () {
        return storage;
      },
      addActivity: function (activity) {
        storage.push(activity);
      },
      removeActivity: function (activity) {
        return removeActivity(activity);
      },
      listActivities: function () {
        return showActivities();
      },
      clearList: function () {
        return clearStorage();
      }
    }
  }

  angular
    .module('components.activity')
    .service('ActivityService', ActivityService);
