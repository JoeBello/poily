var activitiesComponents = angular.module('components.activities', [
    'ui.router'
  ])
  .service('ActivitiesService', require('./activities.service'))
  .component('activities', require('./activities/activities.component'))
  .component('activity', require('./activity/activity.component'))
  .config(require('./activities.state'));


module.exports = activitiesComponents.name;
