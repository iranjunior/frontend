import React from "react";
import { connect } from "react-redux";
import { compose, withProps } from "recompose";
import TextField from '@material-ui/core/TextField';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle
  
} from "react-google-maps";

import mapStyles from "./mapStyles";
import { Container, FieldMap, FieldFilter } from "./styles";

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
  
  const data = props.locations.map(el => ({
    name: el,
    locations: {

    lat:   props.data
          .map(element => {
            return element.hospital === el ? element.lat : null;
          })
          .filter(element => element !== null)[0],
     lng:   props.data
          .map(element => {
            return element.hospital === el ? element.lng : null;
          })
          .filter(element => element !== null)[0]
        }
    ,
    vacancy: props.data
      .map(element => {
        if (element.hospital === el) return element.vacancy;
      })
      .filter(element => element !== undefined)
      .reduce((hold, value) => hold + value)
  }));


  return (
    <GoogleMap
      defaultZoom={7.6}
      defaultCenter={{ lat: -8.3603262, lng: -37.6392343 }}
      defaultOptions={{ styles: mapStyles, streetViewControl: false, scaleControl: false, mapTypeControl: false }}
    >
      {
        data.map(el =>(
          <Circle 
          key={el.name}
          defaultCenter={el.locations}
          defaultRadius={el.vacancy*1000}
          defaultOptions={{
            fillColor: el.vacancy < 7 ? `#ff5252`: el.vacancy < 20 ? `#ffca28`: `#43a047`,
            fillOpacity: 0.3,
            strokeColor:  el.vacancy < 7 ? `#ff5252`: el.vacancy < 20 ? `#ffca28`: `#43a047`,
            strokeOpacity: 0.7
          }}
          />
        ))
      }
    </GoogleMap>
  );
});

const Maps = ({ locations, vacancies, specialities }) => {
  const suggest = specialities.map(el => ({ speciality: el}))
 
  return(
  <Container>
     <FieldFilter>
<TextField 
  id="standard-password-input"
  label="Selecione uma especialidade"
  type="text"
  autoComplete="current-password"
  margin="normal"
/>
    </FieldFilter>
    <FieldMap>
      <Map isMarkerShown locations={locations} data={vacancies}/>
    </FieldMap>
  </Container>
)
}
export default connect(state => ({
  ...state,
  vacancies: state.vacancies.vacancies,
  specialities: state.specialities.specialities,
  locations: state.hospitals.hospitals.name
}))(Maps);
