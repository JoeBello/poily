var activities = {
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
        component: 'activities'
      });
  });
