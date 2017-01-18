function PlacesService ($http, $httpParamSerializer, $state, PlacesServiceGeocoder, API) {
  var geocoder;

  if (PlacesServiceGeocoder.supported === true) {
    geocoder = PlacesServiceGeocoder.geocoder;
  }

  function getUrl(searchParams, type) {
    var endpoint = API[type],
        params = $httpParamSerializer(searchParams);
    return  endpoint.concat(params);
  };

  function extractPlaces(responseObject) {
    return responseObject.data.results;
  };

  function geolocatePlaces() {
    if (geocoder === undefined) {
      var errorObject = { error: 'geolocation service unavailable' };
      return errorObject;
    }

    return geocoder()
      .then(function(geocoderResponse) {
        var geoObject = {
              latitude: geocoderResponse.position.coords.latitude,
              longitude: geocoderResponse.position.coords.longitude
            },
            url = getUrl(geoObject, 'places');

        return url;
      })
      .then(function (url) {
          return $http.get(url).then(extractPlaces);
       })
      .catch(function(error) {
        return error;
      });
  };

  function searchPlaces(placesParams) {
    // TODO input validation
    for (key in placesParams) {
      if (placesParams[key]) {
        placesParams[key] = placesParams[key].toLowerCase();
        placesParams[key] = placesParams[key].replace(/\s/g, '');
      }
    }

    var url = getUrl(placesParams, 'places');

    return $http.get(url)
      .then(function (placesResponse) {
        return extractPlaces(placesResponse);
      })
      .catch(function(error) {
        console.log(error);
      });
  }


  return {
    geolocatePlaces: geolocatePlaces,
    searchPlaces: searchPlaces
  };

}

angular
  .module('components.places')
  .factory('PlacesService', PlacesService);
