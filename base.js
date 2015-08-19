var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

var map;

$(document).ready(function(){

  // CREATE MAP
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.78, lng: -122.44},
    zoom: 8
  });

  // FETCH QUAKE DATA
  $.get(weekly_quakes_endpoint, function(response){
    response.features.forEach(function(quake){

      // AND INFO ROW
      var title = quake.properties.title;
      var hours_ago = Math.round( ( Date.now() - quake.properties.time ) / (1000*60*60) );
      $("#info").append( "<p>" + title + " / " + hours_ago + " hours ago</p>");

      // CREATE MARKER
      var lat = quake.geometry.coordinates[1];
      var lng = quake.geometry.coordinates[0];
      new google.maps.Marker({
        position: new google.maps.LatLng(lat,lng),
        map: map,
        title: title
      });

    })
  })

});

