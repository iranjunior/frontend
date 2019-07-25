import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import api from '../Services/api';

const isLogged = (token = localStorage.getItem('token_id')) =>(
            api.get(`/token/${token}`)
            .then(response => (response.data.validator))
            .catch(err => (err))
    ) 
export const PrivateRoute = ( {component: Component, ...rest}) =>(
    <Route 
        {...rest} 
            render={(props) =>
                     localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined ? (
                   <Component {...props}/> 
                    ) :(
                    <Redirect to={{pathname: '/login', state:{from: props.location}}}/>
                    )
            }/>
)
export default connect(state => ({token: state }))(isLogged)