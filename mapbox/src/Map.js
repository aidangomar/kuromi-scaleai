import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import React from 'react'

const Map = () => {

  mapboxgl.accessToken = 'pk.eyJ1Ijoic3VzdXdhdGFyaWkiLCJhIjoiY2w5OWZidW5iMHUwZjNudDh1eGZqcXhwbCJ9.41fgHBPh1WtI-XsMirb4pw';
  const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      projection: 'globe' // display the map as a 3D globe
  });

  React.useEffect(() => {
    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });
  });
}

export default Map