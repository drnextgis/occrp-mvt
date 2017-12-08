var fs = require('fs');
var extent = require('geojson-extent');
var geojson2mvt = require('geojson2mvt');

var cities = JSON.parse(fs.readFileSync('source/cities.json'));
var zones = JSON.parse(fs.readFileSync('source/zones.json'));
cities.features.map(function(city) {
  console.log(city.properties.name);
  var bbox = extent(city.geometry);
  var options = {
    layerName: 'cities',
    rootDir: 'cache',
    bbox: [bbox[1], bbox[0],
           bbox[3], bbox[2]],
    zoom: {
      min: 10,
      max: 15
    }
  };
  geojson2mvt(zones, options);
});
