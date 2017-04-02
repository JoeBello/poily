function PlacesService($q, $http, $httpParamSerializer, API,
                        PlacesServiceGeocoder, $localStorage, $rootScope) {
  var geocoder = null;

  if (PlacesServiceGeocoder.supported === true) {
    geocoder = PlacesServiceGeocoder.geocoder;
  }

  function buildUrl(searchParams) {
    return API['places'].concat($httpParamSerializer(searchParams));
  }

  function extractResults(responseObject) {
    savePageToken(responseObject.data.next_page_token);
    return responseObject.data.results;
  }

  function saveLastSearch(searchData) {
    var location = searchData.location;
    $localStorage.project1.places.lastSearch = searchData;
    return $rootScope.$broadcast('location_change', location)
  }

  // save the next_page_token from the most recent results
  function savePageToken(token) {
    return $localStorage.project1.places.lastSearch.pageToken = token;
  }

  function geolocatePlaces() {
    if (!geocoder) {
      return $q.reject({ error: 'geolocation service unavailable' });
    }

    return geocoder()
      .then(function(geocoderResponse) {
        return searchPlaces({
                location:[geocoderResponse.position.coords.latitude,
                          geocoderResponse.position.coords.longitude],
                pageToken: null
                });
      })
      .catch(function(error) {
        return { error: error };
      });
  }

  function searchPlaces(searchParams) {

    if (!searchParams.location) {
      return geolocatePlaces()
        .catch(function(error) {
          return { error: error };
        });
    }

    saveLastSearch(searchParams);

    return $http.get(buildUrl(searchParams))
      .then(function(placesResponse) {
        return extractResults(placesResponse);
      })
      .catch(function(error) {
        return { error: error };
      });
  }

  return {
    geolocatePlaces: geolocatePlaces,
    searchPlaces: searchPlaces
  };

}

module.exports = PlacesService;
