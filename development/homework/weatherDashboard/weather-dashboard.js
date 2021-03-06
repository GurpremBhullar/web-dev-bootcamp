$(document).ready(function () {
    var current_Date = moment().format('MMMM Do YYYY, h:mm:ss a');
    var apiKey = "28e8f3efb740c29dfea71effd97c7ec1";
    var differentCities = [];
    var cityInput = $("#city-input-form").val().trim();
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + apiKey; 

    $("#location-search-button").on("click", function() {
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          .then(function (response){
        console.log(response);
        
        $("#locationName").text(response.name); 
        $("#locatoinDate").text(current_Date);  
        $("#humidity").text("Humidity: " + response.main.humidity);
        $("#windSpeed").text("Wind Speed: " + response.wind.speed);

        var tempF = (response.main.temp - 273.15) * 1.80 + 32; 
        $("#temperature").text("Temperature (F) " + tempF.toFixed(2));

          }) 
     }) 
})

   