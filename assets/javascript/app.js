$(document).ready(function () {

    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=aoSPXoHUbFoGrtwGZUsQSBL735BHRriI";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      //console.log(response.data[0].bitly_url);
      
      // OPTION 1
      $("body").append("<img src='" + response.data[7].images.original.url + "' />");
      
      // OPTION 2
      // var img = $("<img/>");
      // img.attr("src", response.data[0].images.original.url);
      // $("body").append(img);

    });




});
