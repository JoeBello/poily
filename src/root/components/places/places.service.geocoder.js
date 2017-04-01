function PlacesServiceGeocoder($window, $q) {
  var supported = false,
      geocoder;

  // if the current environment supports html5 geolocation
  if ($window.navigator.geolocation) {
    supported = true;

    geocoder = function() {
      var deferred = $q.defer(),
          // timeout for the geolocation prompt
          geocoderTimeout = setTimeout(geocoderError, 4000),
          geocoderOptions = {
            enableHighAccuracy: true,
            timeout: 4000,
            maximumAge: 0
          };

      function geocoderSuccess(position) {
        // on success clear the timeout
        clearTimeout(geocoderTimeout);
        var successObject = { position: position };
        deferred.resolve(successObject);
      };

      function geocoderError(error) {
        // on error clear the timeout
        clearTimeout(geocoderTimeout);
        var localError,
            errors = {
              1: 'Permission denied',
              2: 'Position unavailable',
              3: 'Request timeout'
            };

        // if no error was given, the geolocation prompt timed out -
        // return a timeout error
        if (!error) {
          localError = errors[3];
        } else {
          localError = errors[error.code];
        }

        deferred.reject(localError);
      };

      $window.navigator.geolocation.getCurrentPosition(geocoderSuccess, geocoderError, geocoderOptions);

      return deferred.promise;


    }
  }
  return {
    supported: supported,
    geocoder: geocoder
  };

}

module.exports = PlacesServiceGeocoder;
