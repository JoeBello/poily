var activity = {
  bindings: {
    activity: '<',
    onRemove: '&'
  },
  templateUrl: 'app/components/activities/activity/activity.html',
  controller: 'ActivityController'
};

angular
  .module('components.activities')
  .component('activity', activity);
