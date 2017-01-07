function PlaceGeocoderService ($window, $q, ) {
  var supported = false,
      geocoder = null;

  if ($window.navigator.geolocation) {
    var deferred = $q.defer(),
        geocoderOptions = {
          enableHighAccuracy: true,
          timeout: 4000,
          maximumAge: 0
        };

    var geocoderSuccess = function (position) {
      // on success clear the timeout
      clearTimeout(geocoderTimeout);
      var responseObject = {
        status: 'success',
        position: position
      };
      deferred.resolve(responseObject);
    };

    var geocoderError = function (error) {
      // on error clear the timeout
      clearTimeout(geocoderTimeout);
      var error,
          errors = {
            1: 'Permission denied',
            2: 'Position unavailable',
            3: 'Request timeout'
          };

      // if no error was given, the geolocation prompt timed out
      // return a timeout error
      if (!error) {
        error = errors[3];
      } else {
        error = errors[error.code];
      }

      var responseObject = {
        status: 'error',
        error: error
      };

      deferred.resolve(responseObject);
    };

    // create a setTimeout instance to for the geolocation prompt
    var geocoderTimeout = setTimeout(geocoderError, 4000);

    geocoder = function () {
      $window.navigator.geolocation.getCurrentPosition(geocoderSuccess, geocoderError, geocoderOptions);

      return deferred.promise;
    }

    supported = true;

  }

  return {
    supported: supported,
    geocoder: geocoder
  }

}

angular
  .module('components.place')
  .service('PlaceGeocoderService', PlaceGeocoderService);
