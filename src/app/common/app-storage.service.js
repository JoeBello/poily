function AppStorageService($localStorage) {

  if (!$localStorage.hasOwnProperty('project1')) {
    $localStorage.project1 = {
      places: {
        lastSearch: {}
      },
      activities: []
    };
  }

  return {
    // completely remove project1 storage
    destroyStorage: function() {
      delete $localStorage.project1;
    },

    // save details of the most recent search
    saveLastSearch: function(searchData) {
      return $localStorage.project1.places.lastSearch = searchData;
    },

    // save the next_page_token from the most recent results
    savePageToken: function(token) {
      return $localStorage.project1.places.lastSearch.pageToken = token;
    },

    // retrieve details of the most recent search
    getLastSearch: function() {
      return $localStorage.project1.places.lastSearch;
    },

    getLastPageToken: function() {
      return $localStorage.project1.places.lastSearch.pageToken;
    },

    // save an activity
    saveActivity: function(activity) {
      return $localStorage.project1.activities.push(activity);
    },

    // retrieve all stored activities
    getActivities: function() {
      return $localStorage.project1.activities;
    },

    // remove an activity
    destroyActivity: function(activity) {
      var storage = $localStorage.project1.activities;

      for (var i = 0; i < storage.length; i++) {
        if (storage[i].name === activity.name) {
          return storage.splice(i, 1);
        }
      }
    },

    // remove all activities
    destroyActivities: function() {
      var storage = $localStorage.project1.activities;
      return storage.splice(0, storage.length);
    }
  }
}

module.exports = AppStorageService;
