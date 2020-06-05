import React, { useState, useEffect, useRef } from "react"
import {Box} from '@material-ui/core'
import mapboxgl from 'mapbox-gl'
import './login.css'
import allData from '@/assets/jsonData/all.json'

const Login = () => {
    const mapRef = useRef(null)
    const mapCanvas = useRef(null)
    useEffect(()=>{
        mapboxgl.accessToken = 'pk.eyJ1Ijoibnl5anl5YW5mYXBlbmciLCJhIjoiY2p3ajU4eXI2MGdxcDQ4cGI4cHI2bHhjcSJ9.m4FzyOH_5Yo3YVnroLxk-w';
        mapRef.current = new mapboxgl.Map({
            container: mapCanvas.current,
            style: "mapbox://styles/zplinze/ck2wvh2pa05ip1cr8supcaivg",
            center: [118.723, 32.011],
            zoom: 12.0
        });
        const map = mapRef.current
        map.on("load", () => {
            map.addSource('earthquakes',{
              type:'geojson',
              data:allData
            })
            map.addLayer({
              id: "earthquake_circle",
              type: "circle",
              source: "earthquakes",
              paint: {
                  "circle-opacity": 0.6,
                  "circle-radius": 20,
              },
          })
        })
    }, [])
    return <Box component="div" className="mapcontainer">
      <Box component="div" style={{width:'100%',height:'100%'}}>
        <Box component="div" ref={mapCanvas} style={{width:'100%',height:'100%'}}>
        </Box>
      </Box>
    </Box>
}

export default Login
