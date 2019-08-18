import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Panel from '../Components/Panel';
import Map from '../Components/Maps';
import Monitor from '../Components/Monitor';
// import { Container } from './styles';

const Switch = ({ route }) => {
  useEffect(() => {});
  if (route === 'panel') {
    return <Panel />;
  }

  if (route === 'map') {
    return <Map />;
  }

  if (route === 'monitor') {
    return <Monitor />;
  }
  return null;
};
export default connect((state) => ({ ...state, route: state.routes.route }))(Switch);
