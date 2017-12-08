Usage
=====

    $ npm install
    $ npm run seed
    $ npm run server


**Warning:** If you will be use new source files then both city boundaries and zones files
have to be transformed into EPSG:4326 before starting the seeding process. You can make it
with ogr2ogr:

    $ ogr2ogr -f GeoJSON -s_srs EPSG:3857 -t_srs EPSG:4326 zones.json zones_source.json
    $ ogr2ogr -f GeoJSON -s_srs EPSG:3857 -t_srs EPSG:4326 cities.json cities_source.json

