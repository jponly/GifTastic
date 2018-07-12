$(document).ready(function () {

  var simpsons = [];



      function renderButtons() {
        $("#simpsons_view").empty();

          for (var i = 0; i < simpsons.length; i++) {
            var a = $('<button>');
            a.addClass("simpson");
            a.attr("data-name", simpsons[i]);
            a.text(simpsons[i]);
            $("#simpsons_view").append(a);

        }

      }

        $("#add-simpson").on("click", function (event) {
          event.preventDefault();
          var simpson = $("#simpson-input").val().trim();
          simpsons.push(simpson);

          renderButtons();
  });

          renderButtons();

}); // document ready






// ======== possibilities --------//

// $("#simpsons_btn").on("click", function(event) {

//   event.preventDefault();

//   // var simpson = $("#simpson-input").val();

//   var queryURL = "https://api.giphy.com/v1/gifs/search/the-simpsons?api_key=aoSPXoHUbFoGrtwGZUsQSBL735BHRriI&limit=20";

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//     //console.log(response.data[0].bitly_url);

//     // OPTION 1
//     $("#gif_box").append("<img src='" + response.data[7].images.original.url + "' />");

//     // OPTION 2
//     // var img = $("<img/>");
//     // img.attr("src", response.data[0].images.original.url);
//     // $("body").append(img);


//   });

// });

