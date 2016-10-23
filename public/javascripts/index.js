$(function() {
  var pageToken;

  var ajaxGet = function(url, params, callback, view){
      $.get(url, params)
        .done(function(response){
          console.log('GET success!');
          console.log(response);
          pageToken = response.next_page_token || null;
          callback(response, view);
        })
        .fail(function(jqXHR, textStatus){
          console.log('GET fail!');
          console.log(textStatus);
        });
  }

  var templateInjector = function(data, view){
    $('main').append(view({
      places: data.results,
    }));
  }

  $('#placesSearch-submit').click(function(){
    // TODO on initial search, clear main container, insert an empty container
    // and have templateInjector inject template into the new empty container
    // consider a more versatile structure for the results template
    $('.placesResults-Container').remove();
    // TODO all query params must be lower case and underscore delimited
    var params = {
        location: $('#placesSearch-location').val(),
        radius: $('#placesSearch-radius').val(),
        type: $('#placesSearch-venue').val()
        };
    var template = require('../views/placesResults.hbs');
    ajaxGet('http://localhost:3000/api/places', params, templateInjector, template);
  });

  $('#more').click(function(){
    // TODO on requesting more results, append template to already injected
    // template
    // TODO all query params must be lower case and underscore delimited
    var params = {
        location: $('#placesSearch-location').val(),
        radius: $('#placesSearch-radius').val(),
        type: $('#placesSearch-venue').val(),
        pageToken: pageToken
    };
    var template = require('../views/placesResults.hbs');
    ajaxGet('http://localhost:3000/api/places', params, templateInjector, template);
  });
})
