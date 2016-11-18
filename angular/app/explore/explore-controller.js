'use strict';

angular.module('project1')
  .controller('ExploreCtrl', function (PlacesModel, $state) {
    var explore = this;

    explore.search = {
      location: '',
      radius: '',
      type: ''
    };

    explore.error = '';

    function submitSearch() {
      // PlacesModel.check('pewp');
      PlacesModel.search({
        location: explore.search.location,
        radius: explore.search.radius,
        type: explore.search.type
      })
      .then(function (result) {
        console.log(result);
        // onSuccess
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(explore.resetForm())
    }

    function onSuccess(result) {
      // create this state
      $state.go('places');
    }

    explore.submit = function (search, isValid) {
      if (isValid) {
        submitSearch();
      } else {
        explore.error = 'Invalid search criteria!';
      }
    }

    explore.resetForm = function () {
      explore.error = '';
      explore.search = {
        location: '',
        radius: '',
        type: ''
      };
    };

  })


// $(function(){
//   // acquire searchView view
//   var searchView = require('../views/searchView');
//
//   var clear = function(toClear){
//     if (toClear === 'all') {
//       // remove old search results
//       $('.placesResults-place').remove();
//
//       // remove old link for more results
//       $('#getMoreResults').remove();
//
//       // clear previously cached page token
//       localStorage.pagetoken = null;
//     } else {
//       // remove link for more results
//       $('#getMoreResults').remove();
//
//       // clear previously cached page token
//       localStorage.pagetoken = null;
//     }
//   };
//
// // receive form properties from index.js and query API
//   var start = function(params){
//
//     if (params.newSearch) {
//       // if this is a new search, clear everything from previous search
//       clear('all')
//     } else {
//       // if this is not a new search, remove the original link for more results
//       // and clear the previously cached page token
//       clear()
//     }
//
//     $.get(params.url, params.queryParams)
//       .done(function(response){
//
//         // if respones yields a pagetoken cache it in browser memory
//         if (response.next_page_token) {
//           localStorage.pagetoken = response.next_page_token;
//         }
//         // render reponse data with searchView view
//         searchView.render(response.results);
//       })
//       .fail(function(jqXHR, textStatus){
//         console.log('GET fail!');
//         console.log(textStatus);
//         alert('Sorry, there was a problem!');
//       });
//   };
//
//   module.exports = {
//     start: start
//   }
//
// }());
