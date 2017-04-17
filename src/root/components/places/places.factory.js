function PlacesFactory($q, $http, $httpParamSerializer, API, $localStorage,
                        $rootScope) {

  function buildUrl(searchParams) {
    return API['places'].concat($httpParamSerializer(searchParams));
  }

  function extractResults(responseObject) {
    savePageToken(responseObject.data.next_page_token);
    return responseObject.data.places;
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

  function searchPlaces(searchParams) {
    if (!searchParams.radius) {
      searchParams.radius = 20;
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
    searchPlaces: searchPlaces
  };

}

module.exports = PlacesFactory;
