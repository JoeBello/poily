function PlacesService ($http, $httpParamSerializer, $localStorage, API,
  PlacesServiceGeocoder) {

  var storage = $localStorage.project1.places,
      endpoint = API['places'];

  if (PlacesServiceGeocoder.supported === true) {
    var geocoder = PlacesServiceGeocoder.geocoder;
  }

  function buildUrl(searchParams, type) {
    return  endpoint.concat($httpParamSerializer(searchParams));
  }

  function extractResults(responseObject) {
    storage.lastSearch.pageToken = responseObject.data.next_page_token
    return responseObject.data.results;
  }

  function geolocatePlaces() {
    if (geocoder === undefined) {
      return { error: 'geolocation service unavailable' };
    }

    return geocoder()
      .then(function(geocoderResponse) {
        return searchPlaces({
              latitude: geocoderResponse.position.coords.latitude,
              longitude: geocoderResponse.position.coords.longitude,
              pageToken: null
            });
      })
      .catch(function(error) {
        return error;
      });
  }

  function searchPlaces(searchParams) {
    var searchDetails = {
      pageToken: searchParams.pageToken || null,
      latitude: searchParams.latitude || null,
      longitude: searchParams.longitude || null,
      zipcode: searchParams.zipcode || null,
      radius: searchParams.radius || null,
      type: searchParams.type || null
    };

    storage.lastSearch = searchDetails;

    return $http.get(buildUrl(searchDetails))
      .then(function (placesResponse) {
        return extractResults(placesResponse);
      })
      .catch(function(error) {
        return error;
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
