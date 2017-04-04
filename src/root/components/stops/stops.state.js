function stopsState($stateProvider) {
  $stateProvider
    .state('stops', {
      parent: 'app',
      url: '/stops',
      resolve: {
        stops: function(StopsService) {
          return StopsService.getStops();
        }
      },
      views: {
        main: {
          component: 'stops'
        }
      }
    });
}

module.exports = stopsState;
