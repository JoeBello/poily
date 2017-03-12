var activitiesComponents = angular.module('components.activities', [
    'ui.router'
  ])
  .service('ActivitiesService', require('./activities.service'))
  .component('activities', require('./activities/activities.component'))
  .component('activity', require('./activity/activity.component'))
  .config(function ($stateProvider) {
    $stateProvider
      .state('activities', {
        parent: 'app',
        url: '/activities',
        component: 'activities',
        resolve: {
          activities: function (ActivitiesService) {
            return ActivitiesService.getActivities();
          }
        }
      });
  });


module.exports = activitiesComponents.name;
