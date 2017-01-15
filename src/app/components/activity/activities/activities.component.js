var activities = {
  bindings: {
    activities: '<'
  },
  templateUrl: 'app/components/activity/activities/activities.html',
  controller: 'ActivitiesController'
};

angular
  .module('components.activity')
  .component('activities', activities)
  .config(function ($stateProvider) {
    $stateProvider
      .state('activities', {
        parent: 'app',
        url: '/activities',
        resolve: {
          activities: function (ActivityService) {
            return ActivityService.getActivities();
          }
        },
        views: {
          'main': {
            component: 'activities'
          }
        }
      });
  })
  .run(function($localStorage) {
    var project1 = $localStorage.project1;
    project1.activities = project1.activities || [];
  });
