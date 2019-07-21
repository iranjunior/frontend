import React from 'react';
import { connect } from 'react-redux';

import Routes  from './Routes';


function App() {
  return (
          <Routes />
  
  );
}

export default connect(state => ({}))(App);
