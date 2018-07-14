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

        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=aoSPXoHUbFoGrtwGZUsQSBL735BHRriI&tag=simpsons";


        $.ajax({
          url: queryURL,
          method: "GET"
        })


          .then(function (response) {

            var imageUrl = response.data.image_original_url;
            var simpImage = $("<img>");
            simpImage.attr("src", imageUrl);
            simpImage.attr("alt", "simpson image");
            $("#simpsons_view").append(simpImage);



          });



        renderButtons();

      });

        renderButtons();




}); // document ready





















