function LocationFactory($window, $q) {
  var geocoder;

  if ($window.navigator.geolocation) {
    geocoder = function geocoder() {
      var deferred = $q.defer(),
          geocoderOptions = {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 4000
          },
          geocoderTimeout = setTimeout(geocoderError, 4000);

      function geocoderSuccess(position) {
        clearTimeout(geocoderTimeout);
        var successObject = { position: position };
        deferred.resolve(successObject);
      };

      function geocoderError(error) {
        clearTimeout(geocoderTimeout);
        var errorObject = {
              error: '',
              source: 'geocoder'
            },
            errors = {
              1: 'Permission denied',
              2: 'Position unavailable',
              3: 'Request timeout'
            },
            localError;

        if (!error) {
          localError = errors[3];
        } else {
          localError = errors[error.code];
        }

        errorObject.error = localError;

        deferred.reject(errorObject);
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
      .then(function (geocoderResponse) {
        var coords = geocoderResponse.position.coords,
            coordinates = coords.latitude.toFixed(3) + ',' +
                          coords.longitude.toFixed(3);
        return coordinates;
      })
      .catch(function(error) {
        return error;
      });
  }

  return {
    geolocate: geolocate
  };
}

module.exports = LocationFactory;
