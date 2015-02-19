///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'humswinger13.l8mm4f1k'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiaHVtc3dpbmdlcjEzIiwiYSI6ImgtS2RhbkEifQ.lrT6WSaNyhI1-7O-tEQmjg'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);
