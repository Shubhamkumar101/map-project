import {React, useEffect, useState} from 'react'
import axios from 'axios';
import './App.css'
import { MapContainer ,TileLayer,Marker} from 'react-leaflet'
import data from './data';
function App() {

  return (
    <>
      <MapContainer center = { [ 20.593683, 78.962883 ] }
         zoom = { 5}
         scrollWheelZoom = { true }
        
     >
      {
          data & data.map((dt)=>{
            <Marker
            key={dt.Id}
            position= {[dt.Latitude, dt.Longitude]}
            // eventHandlers={{
            //   click: () => {
            //     setActiveCovid(eachData)
            //   }
            // }}
          />
          })
        }
     <TileLayer
attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
       url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
     />
</MapContainer>
    </>
)
}

export default App;