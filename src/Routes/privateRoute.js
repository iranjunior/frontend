import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import api from '../Services/api';

const isLogged = (token = localStorage.getItem('token')) =>(
            api.get(`/token`, {
                headers:{
                    'Authorization': `Bearer ${token}`
                    }
            })
            .then(response => (response.data.validator))
            .catch(err => (false))
    ) 
export const PrivateRoute = ( {component: Component, ...rest}) =>(
    <Route 
        {...rest} 
            render={(props) => {

                // localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined ? (
                    const isLoggedTest = isLogged() 
                    if(isLoggedTest){
                        return        <Component {...props}/> 
                    } else{
                        return  <Redirect to={{pathname: '/login', state:{from: props.location}}}/>
                    }
                }
                    
            }/>
)
export default connect(state => ({token: state }))(isLogged)