import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

import mapStyles from './mapStyles'
import { Container, FieldMap } from './styles';

 const Map = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCeYzwunekz59YFjsVKp8xO-K-agkgvOUA&v=3.exp&libraries=visualization,geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
 {
    const data = [
      new window.google.maps.LatLng( -8.3603262, -37.6392343)
    ];
    
  const gradient =[
      'rgba(0, 255, 0, 0)',
      'rgba(0, 255, 0, 0.1)',
      'rgba(0, 255, 0, 0.2)',
      'rgba(0, 255, 0, 0.3)',
      'rgba(0, 255, 0, 0.4)',
      'rgba(0, 255, 0, 0.5)',
      'rgba(0, 255, 0, 0.6)',
      'rgba(0, 255, 0, 0.7)',
      'rgba(0, 255, 0, 0.8)',
      'rgba(0, 255, 0, 0.9)',
      'rgba(0, 255, 0, 1)'
          
    ]
     return(
         
         <GoogleMap
         defaultZoom={7.6}
         defaultCenter={{ lat: -8.3603262, lng: -37.6392343 }}
         defaultOptions={{styles: mapStyles}}
         >
      <HeatmapLayer 
        defaultData={data}
        defaultOptions={{radius: 30, gradient}}
        />
    </GoogleMap>
        )
    } 
  )
  

const Maps = () => (
    <Container>
        <FieldMap>
            <Map isMarkerShown />
        </FieldMap>
    </Container>
);

export default Maps;
