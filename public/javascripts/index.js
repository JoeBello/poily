$(function() {
  $('#locationForm').submit(function (event) {
    alert('Form submitted');
    event.preventDefault();

    var form = $(this);

      $.ajax({
        url: 'http://localhost:4000/api/location',
        method: 'GET',
        data: form.serialize(),
        // data: {
        //   form: form.serialize(),
        //   next: '19dlk29'
        // },
        dataType: 'json'
      })
      .done(function(response) {
        console.log('Response!' + response);
        var source = $('#template').html();
        var template = Handlebars.compile(source);
        $('.content').html(template({places: response}));
      })
      .fail(function(jqXHR, textStatus) {
        console.log(textStatus);
      })
      .always(function() {
        console.log("complete");
      });
  });

  $('#more').on('click', function(){
    // window.alert('HERRO');
    // turn ajax call into a function where 'data' is passed in.
    // when more results is clicked, the
    // data attribute is empty
    $.ajax({
      url: 'http://localhost:4000/hello',
      method: 'GET',
      // data: form.serialize(),
      // dataType: 'json'
    })
    .done(function(response) {
      console.log('more listings done!');
      // console.log(response);
      // var source = $('#template').html();
      // var template = Handlebars.compile(source);
      // $('.content').html(template({places: response}));
    })
    .fail(function(jqXHR, textStatus) {
      console.log(textStatus);
    })
    .always(function() {
      console.log("complete");
    });
  });
})
