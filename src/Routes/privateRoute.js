import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const isLogged = (token) => {console.log(token) ;return token !== null && token !== undefined ?  true : false}

export const PrivateRoute = ( {component: Component, ...rest}) =>(
    <Route 
        {...rest} 
            render={ (props) =>
                     localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined ? (
                    <Component {...props}/> 
                    ) :(
                    <Redirect to={{pathname: '/login', state:{from: props.location}}}/>
                    )
            }/>
)
export default connect(state => ({token : state }))(isLogged)