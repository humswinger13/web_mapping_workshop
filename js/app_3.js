///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'humswinger13.l8mm4f1k'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiaHVtc3dpbmdlcjEzIiwiYSI6ImgtS2RhbkEifQ.lrT6WSaNyhI1-7O-tEQmjg'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

///////////////////////////////////////////////////////////////////////////
// This is the area we're going to use to add data to our map

var dataFileToAdd = 'data/bike_routes.geojson'; //<- Point this to the file that you want to include on the map
var dataToAdd;

var featureLayer = L.mapbox.featureLayer()
    .loadURL(dataFileToAdd)
    .addTo(map);

featureLayer.on('ready', function() {
    this.setStyle({
        "color": "#fff",
        "fillColor": "#fff",
        "weight": 6,
        "opacity": 1
    });
    map.fitBounds(featureLayer.getBounds());
});

///////////////////////////////////////////////////////////////////////////
// Add some basic click handling

featureLayer.on('ready', function(){
  this.eachLayer(function(layer){
    layer.bindPopup('Trail Name: ' + layer.feature.properties.name);
  });
});
