import logo from './logo.svg';
import './App.css';
import React from 'react'

// mapbox
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoic3VzdXdhdGFyaWkiLCJhIjoiY2w5OWZidW5iMHUwZjNudDh1eGZqcXhwbCJ9.41fgHBPh1WtI-XsMirb4pw'
});

const App = () => {
  return (
    <div className="App">
      <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      ></Map>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>



      </header>
    </div>
  
  );
}

export default App;
