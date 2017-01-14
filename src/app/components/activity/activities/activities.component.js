var activities = {
  bindings: {
    activities: '<'
  },
  templateUrl: 'app/components/activity/activities/activities.html',
  controller: 'ActivitesController'
};

angular
  .module('components.activity')
  .component('activities', activities)
  .config(function ($stateProvider) {
    $stateProvider
      .state('activities', {
        parent: 'app',
        url: '/activities',
        component: 'activities',
        resolve: {
          activities: function (ActivityService) {
            console.log('incoming activities...')
            return ActivityService.getActivityList();
          }
        }
      });
  })
  .run(function($localStorage) {
    var project1 = $localStorage.project1;
    project1.activities = project1.activities || {};
  });
