$(function(){
  // acquire SearchController
  var searchController = require('./controllers/searchController');
  $('#placesSearch').submit(function(event) {
    // prevent default behavior
    event.preventDefault();

    // remove old search results
    $('.placesResults-Result').remove();

    // cache form properties
    var form = $(this),
    // TODO all query params must be lower case and underscore delimited
    // TODO input validation
     formParams = {
      url: form.attr('action'),
      queryParams: form.serialize()
    };

    // call SearchController start with form properties
    searchController.start(formParams);
  });
}());
