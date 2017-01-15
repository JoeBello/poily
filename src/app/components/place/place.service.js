function PlaceService ($http, $httpParamSerializer, $state, PlaceServiceGeocoder, API) {
  var geocoder;

  if (PlaceServiceGeocoder.supported === true) {
    geocoder = PlaceServiceGeocoder.geocoder;
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
    if (!placesParams.radius) {
      placesParams.radius = 5;
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
  .module('components.place')
  .factory('PlaceService', PlaceService);
