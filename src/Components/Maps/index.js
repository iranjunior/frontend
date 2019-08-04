import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from "react-google-maps"
import mapStyles from './mapStyles';

import { Container, FieldFilter, MapField } from "./styles";


const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={7.5}
    defaultCenter={{ lat: -8.305095,  lng: -37.777673 }}
    defaultOptions={{styles: mapStyles}}
  >
    
    <Circle defaultCenter={{ lat: -8.305095, lng: -37.777673 }} radius={30000} options={{
          fillColor: '#34be74',
          fillOpacity: .2,
          strokeColor: '#2faa68',
          strokeWeight: 0.4}} />
  </GoogleMap>
))



const Maps = () => (
  <Container>
      <FieldFilter></FieldFilter>
    <MapField>
    <Map
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCeYzwunekz59YFjsVKp8xO-K-agkgvOUA"}
        loadingElement={<div style={{ height: `100%`, position: `unset` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `400px` }} />}
        style={{ height: `100%`, position: `relative`, overflow: `initial` }}
      />
    </MapField>
  </Container>
);

export default Maps;
