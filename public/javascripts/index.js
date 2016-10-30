$(function(){
  // acquire SearchController
  var searchController = require('./controllers/searchController');
  $('#placesSearch').submit(function(event) {

    // prevent default behavior
    event.preventDefault();

    // cache form properties
    var form = $(this),
    // TODO all query params must be lower case and underscore delimited
    // TODO input validation
     formProps = {
      url: form.attr('action'),
      queryParams: form.serialize(),
      newSearch: true
    };

    // call SearchController start() with form properties
    searchController.start(formProps);
  });

  $('#placesMoreResults').on('click', function(event) {
    // prevent default behavior
    event.preventDefault();

    // cache form properties
    var form = $('#placesSearch'),
    // TODO all query params must be lower case and underscore delimited
    // TODO input validation
     formProps = {
      url: form.attr('action'),
      queryParams: form.serialize() + "&pagetoken=" + localStorage.pagetoken,
      newSearch: false
    };

    // call SearchController start() with form properties
    searchController.start(formProps);
  })
}());
