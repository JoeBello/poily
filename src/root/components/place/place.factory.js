function PlaceFactory($http, $httpParamSerializer, API, AppService,
                      $localStorage, $rootScope) {

  function buildUrl(endpoint, params) {
    return API[endpoint].concat(params);
  }

  function deleteAllPlaces() {
    var places = $localStorage.Poily.place.placesSaved;
    places.splice(0, places.length);
    $rootScope.$broadcast('saved_count', places.length);
  }

  function deletePlace(place) {
    var places = $localStorage.Poily.place.placesSaved;
    places.splice(places.indexOf(place), 1);
    $rootScope.$broadcast('saved_count', places.length);
  }

  function extractId(items) {
    var ids = [];

    items.forEach(function(item) {
      ids.push(item.place_id);
    });

    return ids;
  }

  function extractResults(responseObject) {
    var pageToken = responseObject.data.next_page_token || null;
    saveNextPageToken(pageToken);
    return responseObject.data.results;
  }

  function getMorePlaces() {
    var lastSearch = $localStorage.Poily.lastSearch,
        pageToken = getNextPageToken();

    return getPlaces(lastSearch, pageToken);
  }

  function getNextPageToken() {
    return $localStorage.Poily.place.next_page_token;
  }

  function getOnePlace(place) {
    var id = extractId(place);

    return $http.get(buildUrl('one', id))
      .then(function(placesResponse) {
        return extractResults(placesResponse);
      })
      .then(function(results) {
        results[0].saved = true;
        return results;
      })
      .catch(function(error) {
        return { error: error };
      });
  }

  function getPlaces(searchParams, pageToken) {
    var queryParams = {
      location: searchParams.location,
      type: searchParams.type || '',
      radius: 25,
      next_page_token: pageToken || null
    };

    saveLastSearch(queryParams);

    return $http.get(buildUrl('places', $httpParamSerializer(queryParams)))
      .then(function(placesResponse) {
        return extractResults(placesResponse);
      })
  }

  function getSavedPlaces() {
    var ids,
        places = $localStorage.Poily.place.placesSaved;

    if (places.length === 1) {
      return getOnePlace(places);
    }

    ids = extractId(places);

    return $http.get(buildUrl('collection', $httpParamSerializer(ids)))
      .then(function(placesResponse) {
        return extractResults(placesResponse);
      })
      .then(function(results) {
        results.forEach(function(result) {
          result.saved = true;
        });
        return results;
      })
      .catch(function(error) {
        return { error: error };
      });
  }

  function init() {
    AppService.init();

    if (!$localStorage.Poily.hasOwnProperty('place')) {
      $localStorage.Poily.place = {
        next_page_token: null,
        placesSaved: []
      }
    }
  }

  function saveLastSearch(searchDetails) {
    $localStorage.Poily.lastSearch = searchDetails;
  }

  function saveNextPageToken(token) {
    $localStorage.Poily.place.next_page_token = null;

    if (token) {
      $localStorage.Poily.place.next_page_token = token;
    }
  }

  function savePlace(place) {
    var places = $localStorage.Poily.place.placesSaved;
    places.push(place);
    $rootScope.$broadcast('saved_count', places.length);

  }



  return {
    deleteAllPlaces: deleteAllPlaces,
    deletePlace: deletePlace,
    getMorePlaces: getMorePlaces,
    getNextPageToken: getNextPageToken,
    getSavedPlaces: getSavedPlaces,
    init: init,
    savePlace: savePlace,
    getPlaces: getPlaces
  };

}

module.exports = PlaceFactory;
