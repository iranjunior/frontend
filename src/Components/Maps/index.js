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
);

export default Maps;
