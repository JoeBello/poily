var activity = {
  bindings: {
    activity: '<',
    onRemove: '&'
  },
  templateUrl: 'app/components/activity/activity/activity.html',
  controller: 'ActivityController'
};

angular
  .module('components.activity')
  .component('activity', activity);
