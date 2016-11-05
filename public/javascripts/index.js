$(function(){
  var router = function(container, appRoutes) {
    var storage = localStorage,
      container = container,
      routes = appRoutes || {};
    routes.pageNotFound = require('../templates/404.hbs');

    var _render = function(location) {
      // if the current location exists in the routes map render the
      // appropriate view in the application container, otherwise render the
      //  404 view
      if (routes[location]){
        container.empty().append(routes[location]);;
      } else {
        container.empty().append(routes['pageNotFound']);;
      }
    };

    var _watch = function() {
      // initial call to _render() will reload the view on page reloads
      _render(window.location.hash);

      // when a hashchange occurs call _render()
      $(window).on('hashchange', function() {
        _render(window.location.hash);
      });

      // when the user attempts to leave, cache the hash for their current
      // location in the reference to localStorage
      $(window).on('beforeunload', function(){
        storage.currentLocation = window.location.hash;
      })
    };

    var init = function() {
      console.log('Router initialized!');

      // get the first route in the _routes map, which should be the 'home'
      // route
      for (var startView in routes) break;

      // watch for hashchanges
      _watch();

      // check the reference to localStorage for a valid hash from the user's
      // previous visit
      // if a valid hash exists, use it to trigger a hashchange, otherwise
      // use the cached route
      if (routes.hasOwnProperty(storage.currentLocation)) {
        window.location.hash = storage.currentLocation;
      } else {
        window.location.hash = startView;
      }
    };

    return {
      init: init
    };
  };

  var container = $('main'),
    project1Routes = {
      '#home': require('../templates/home.hbs'),
      '#search': require('../templates/search.hbs')
    };

  var spaRouter = router(container, project1Routes);

  spaRouter.init();
});
