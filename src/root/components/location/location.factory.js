function LocationFactory($window, $q) {
  var geocoder;

  // if the current environment supports html5 geolocation
  if ($window.navigator.geolocation) {

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

  function geolocate() {
    if (!geocoder) {
      return $q.reject({ error: 'geolocation service unavailable' });
    }

    return geocoder()
      .then(function(geocoderResponse) {
        var coords = geocoderResponse.position.coords,
            coordinates = coords.latitude + ',' + coords.longitude;
        return coordinates;
      })
      .catch(function(error) {
        return { error: error };
      });
  }

  return {
    geolocate: geolocate
  };

}

module.exports = LocationFactory;
