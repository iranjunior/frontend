import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import SwitchPanel from '../../Routes/SwitchPanel';
import { LOADED_USER } from '../../Constants/actionsType';
// import { Container } from './styles'

import api, { config } from '../../Services/api';

const loadUser = (user, dispatch) => {
  if (user === null || user === undefined || Object.keys(user.user).length === 0) {
    api
      .get('/user', config)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: LOADED_USER,
            user: response.data.user,
          });
        }
      })
      .catch();
  }
};

const Home = ({ user, dispatch }) => {
  useEffect(() => {
    loadUser(user, dispatch);
  });

  return (
    <>
      <Header />
      <Sidebar />
      <SwitchPanel />
    </>
  );
};

export default connect((state) => ({ ...state, user: state.user }))(Home);
