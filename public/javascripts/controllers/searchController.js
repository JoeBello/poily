$(function(){
  // acquire searchView view
  var searchView = require('../views/searchView');
  // receive event properties from main and query RESTful API

  var clear = function(){
    // remove link for more results
    $('#getMoreResults').remove();

    // remove old search results
    $('.placesResults-place').remove();

    // clear previously cached page token
    localStorage.pagetoken = null;

  };

  var start = function(params){

    if (params.newSearch) {
      // clear everything from previous search
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
