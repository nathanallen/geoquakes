// globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"
var $info_row_target;
var map;

$(document).ready(function(){

  $info_row_target = $("#info");

  createMap();
  fetchQuakeData();

});

function fetchQuakeData(){
  $.get(weekly_quakes_endpoint, function(response){
    response.features.forEach(function renderRowAndMarker(quake){
      // ADD INFO ROW
      var title = quake.properties.title;
      var hours_ago = Math.round( ( Date.now() - quake.properties.time ) / (1000*60*60) );
      $info_row_target.append( "<p>" + title + " / " + hours_ago + " hours ago</p>");

      // CREATE MARKER
      var lat = quake.geometry.coordinates[1];
      var lng = quake.geometry.coordinates[0];
      new google.maps.Marker({
        position: new google.maps.LatLng(lat,lng),
        map: map,
        title: title
      });
    });
  })
}

function createMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.78, lng: -122.44},
    zoom: 1
  });
}


