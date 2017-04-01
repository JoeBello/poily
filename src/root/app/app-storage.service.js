function AppStorageService($localStorage, $rootScope) {
  if (!$localStorage.hasOwnProperty('project1')) {
    $localStorage.$default({
      project1: {
        places: {
          lastSearch: {}
        },
        activities: []
      }
    })
  }

  return {
    // completely remove project1 storage
    destroyStorage: function() {
      delete $localStorage.project1;
    },

    // save details of the most recent search
    saveLastSearch: function(searchData) {
      var location = searchData.location;
      $localStorage.project1.places.lastSearch = searchData;
      return $rootScope.$broadcast('location_change', location)
    },

    // save the next_page_token from the most recent results
    savePageToken: function(token) {
      return $localStorage.project1.places.lastSearch.pageToken = token;
    },

    // retrieve details of the most recent search
    getLastSearch: function() {
      return $localStorage.project1.places.lastSearch;
    },

    // retrieve the location of the most recent search
    getLastLocation: function() {
      var location = $localStorage.project1.places.lastSearch.location || null;

      if (typeof location === 'string' || location === null) {
        return location;
      } else if (typeof location === 'object') {
        return location = location.join(',');
      }

    },

    // retrieve the next page token from the results of the last search
    getLastPageToken: function() {
      return $localStorage.project1.places.lastSearch.pageToken || null;
    },

    // remove the details of the last search
    destroyLastSearch: function() {
      var lastSearch = $localStorage.project1.places.lastSearch;
      angular.forEach(lastSearch, function(value, prop) {
        delete lastSearch[prop];
      });
    },

    // save an activity
    saveActivity: function(activity) {
      var activities = $localStorage.project1.activities;
      activities.push(activity);
      return $rootScope.$broadcast('stop_change', activities);
    },

    // retrieve all stored activities
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
  }
}

module.exports = AppStorageService;
