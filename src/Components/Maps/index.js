import React from "react";
import { connect } from "react-redux";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

import mapStyles, { condition } from "./mapStyles";
import { Container, FieldMap } from "./styles";

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCeYzwunekz59YFjsVKp8xO-K-agkgvOUA&v=3.exp&libraries=visualization,geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  //const data = props.locations.map(el => ({name: el.hospital, locations:[ new window.google.maps.LatLng(el.lat, el.lng)], speciality: el.speciality, vacancy: el.vacancy, key: el.key}));
  let data = [...new Set(props.locations.map(el => el.hospital).sort())];
  //const data = props.locations.map(el =>(new window.google.maps.LatLng( el.lat, el.lng)));
  data = data.map(el => ({
    name: el,
    locations: {

    lat:   props.locations
          .map(element => {
            return element.hospital === el ? element.lat : null;
          })
          .filter(element => element !== null)[0],
     lng:   props.locations
          .map(element => {
            return element.hospital === el ? element.lng : null;
          })
          .filter(element => element !== null)[0]
        }
    ,
    vacancy: props.locations
      .map(element => {
        if (element.hospital === el) return element.vacancy;
      })
      .filter(element => element !== undefined)
      .reduce((hold, value) => hold + value)
  }));
  // } ))
  //console.log(props.locations.filter(element => {if(element.hospital === "Hospital Restauração") return element.vacancy}).reduce((hold, value, index) => ((hold + value) /index)) )
  //console.log(props.locations.map(element => {if(element.hospital === "Hospital da Restauração") return element.vacancy }).filter(element => element!== undefined).reduce((hold, value) => hold + value))
  //.reduce((hold, value, index) => ((hold + value) /index)) )
  console.log(data);
  return (
    <GoogleMap
      defaultZoom={7.6}
      defaultCenter={{ lat: -8.3603262, lng: -37.6392343 }}
      defaultOptions={{ styles: mapStyles, streetViewControl: false, scaleControl: false, mapTypeControl: false }}
    >
      {
        data.map(el =>(
          <Marker 
          position={el.locations}
          defaultIcon={'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'}
          />
        ))
        
        /* data.map(el => (
        <HeatmapLayer
          key={el.name}
          defaultData={el.locations}
          defaultOptions={{
            radius: el.vacancy < 3 ? 50: el.vacancy  < 20 ? 30: 20,
            gradient:
              el.vacancy < 3
                ? condition.low
                : el.vacancy < 20
                ? condition.medium
                : condition.high
          } />
      ))}*/}
        
    </GoogleMap>
  );
});

const Maps = ({ vacancies }) => (
  <Container>
    <FieldMap>
      <Map isMarkerShown locations={vacancies} />
    </FieldMap>
  </Container>
);

export default connect(state => ({
  ...state,
  vacancies: state.vacancies.vacancies
}))(Maps);
