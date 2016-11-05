// /   $('#placesSearch').submit(function(event) {
//
//     // prevent default behavior
//     event.preventDefault();
//     alert(window.location);
//     // TODO input validation
//
//     // cache value for place search type and replace white space with
//     // underscore
//     var placeType = $('#placesSearch-type').val(),
//       placeTypeUnderscored = placeType.replace(/ /g, '_');
//
//     // set value of place search type property to underscore delimited value
//     $('#placesSearch-type').val(placeTypeUnderscored);
//
//     // cache form properties
//     var form = $(this),
//       formProps = {
//         url: form.attr('action'),
//         queryParams: form.serialize().toLowerCase(),
//         newSearch: true
//       };
//
//     console.log(formProps.queryParams);
//
//     // call SearchController start() with form properties
//     searchController.start(formProps);
//   });
//
//   // add event listener to body, to be binded to #getMoreResults link
//   // if/when added
//   $('body').on('click', '#getMoreResults', function(event) {
//     // prevent default behavior
//     event.preventDefault();
//
//     // cache form properties
//     var form = $('#placesSearch'),
//     // TODO all query params must be lower case and underscore delimited
//     // TODO input validation
//      formProps = {
//       url: form.attr('action'),
//       queryParams: form.serialize() + "&pagetoken=" + localStorage.pagetoken,
//       newSearch: false
//     };
//
//     // call SearchController start() with form properties
//     searchController.start(formProps);
//   })
// }());
//

$(function(){
  // acquire searchView view
  var searchView = require('../views/searchView');

  var clear = function(toClear){
    if (toClear === 'all') {
      // remove old search results
      $('.placesResults-place').remove();

      // remove old link for more results
      $('#getMoreResults').remove();

      // clear previously cached page token
      localStorage.pagetoken = null;
    } else {
      // remove link for more results
      $('#getMoreResults').remove();

      // clear previously cached page token
      localStorage.pagetoken = null;
    }
  };

// receive form properties from index.js and query API
  var start = function(params){

    if (params.newSearch) {
      // if this is a new search, clear everything from previous search
      clear('all')
    } else {
      // if this is not a new search, remove the original link for more results
      // and clear the previously cached page token
      clear()
    }

    $.get(params.url, params.queryParams)
      .done(function(response){

        // if respones yields a pagetoken cache it in browser memory
        if (response.next_page_token) {
          localStorage.pagetoken = response.next_page_token;
        }
        // render reponse data with searchView view
        searchView.render(response.results);
      })
      .fail(function(jqXHR, textStatus){
        console.log('GET fail!');
        console.log(textStatus);
        alert('Sorry, there was a problem!');
      });
  };

  module.exports = {
    start: start
  }

}());
