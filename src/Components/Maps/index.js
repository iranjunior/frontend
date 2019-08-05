import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import mapStyles from './mapStyles';

import { Container, FieldFilter, MapField } from "./styles";


const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={7.5}
    defaultCenter={{ lat: -8.305095,  lng: -37.777673 }}
    defaultOptions={{styles: mapStyles}}
  >
    
      <HeatmapLayer
      data={[
        {location: {lat: -8.0421584, lng: -35.008676}, weight: 0.5}
      ]}
      options={{radius: 30000}}
      />
  </GoogleMap>
))



const Maps = () => (
  <Container>
      <FieldFilter></FieldFilter>
    <MapField>
    <Map
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places,visualization&key=AIzaSyCeYzwunekz59YFjsVKp8xO-K-agkgvOUA"}
        loadingElement={<div style={{ height: `100%`, position: `unset` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `400px` }} />}
        style={{ height: `100%`, position: `relative`, overflow: `initial` }}
      />
    </MapField>
  </Container>
=======
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
    const data = [new window.google.maps.LatLng( -8.3603262, -37.6392343)];
     return(
         
         <GoogleMap
         defaultZoom={7.6}
         defaultCenter={{ lat: -8.3603262, lng: -37.6392343 }}
         defaultOptions={{styles: mapStyles}}
         >
      <HeatmapLayer 
        defaultData={data}
        defaultOptions={{radius: 300}}
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
>>>>>>> 9bf2d3d83bcf2c07af80226ad65fa7158ef54b36
);

export default Maps;
