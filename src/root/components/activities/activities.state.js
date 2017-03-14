function activitiesState($stateProvider) {
  $stateProvider
    .state('activities', {
      parent: 'app',
      url: '/activities',
      resolve: {
        activities: function(ActivitiesService) {
          return ActivitiesService.getActivities();
        }
      },
      views: {
        main: {
          component: 'activities'
        }
      }
    });
}

module.exports = activitiesState;
