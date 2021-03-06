import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  withScriptjs, withGoogleMap, GoogleMap, Circle,
} from 'react-google-maps';
import mapStyles from './mapStyles';
import { Container, FieldMap, FieldFilter } from './styles';

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCeYzwunekz59YFjsVKp8xO-K-agkgvOUA&v=3.exp&libraries=visualization,geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => {
  const getColor = (vacancy) => {
    if (vacancy < 3) return '#ff5252';
    if (vacancy < 7) return '#ffca28';
    return '#43a047';
  };
  const getMean = (array) => array.reduce((hold, current) => hold + current) / array.length;

  const data = props.locations.map((el) => ({
    name: el,
    locations: {
      lat: props.data
        .map((element) => (element.hospital === el ? element.lat : null))
        .filter((element) => element !== null)[0],
      lng: props.data
        .map((element) => (element.hospital === el ? element.lng : null))
        .filter((element) => element !== null)[0],
    },
    vacancy: getMean(
      props.data
        .map((element) => {
          if (element.hospital === el && props.specialities === '') return element.vacancy;
          if (element.hospital === el && element.speciality === props.specialities) {
            return element.vacancy;
          }
          return null;
        })
        .filter((element) => element !== undefined),
    ),
  }));

  console.log(data);

  return (
    <GoogleMap
      defaultZoom={7.6}
      defaultCenter={{ lat: -8.3603262, lng: -37.6392343 }}
      defaultOptions={{
        styles: mapStyles,
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
      }}
    >
      {data.map((el) => (
        <Circle
          key={el.name}
          defaultCenter={el.locations}
          defaultRadius={el.vacancy * 10000}
          defaultOptions={{
            fillColor: getColor(el.vacancy),
            fillOpacity: 0.3,
            strokeColor: getColor(el.vacancy),
            strokeOpacity: 0.7,
          }}
        />
      ))}
    </GoogleMap>
  );
});

const Maps = ({ locations, vacancies, specialities }) => {
  const [speciality, setSpeciality] = useState('');
  return (
    <Container>
      <FieldMap>
        <FieldFilter>
          <FormControl style={{ width: '60%' }}>
            <InputLabel htmlFor="select-speciality">Selecione uma especialidade</InputLabel>
            <Select
              value={speciality}
              onChange={(e) => {
                setSpeciality(e.target.value);
              }}
              inputProps={{
                id: 'select-speciality',
              }}
            >
              {specialities.map((el) => (
                <MenuItem key={el} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FieldFilter>
        <Map isMarkerShown specialities={speciality} locations={locations} data={vacancies} />
      </FieldMap>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  ...state,
  vacancies: state.vacancies.vacancies,
  specialities: state.specialities.specialities,
  locations: state.hospitals.hospitals.name,
});

export default connect(mapStateToProps)(Maps);
