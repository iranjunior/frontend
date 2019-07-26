import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import api from '../Services/api';
import  Async  from 'react-promise';

const isLogged = (token = localStorage.getItem('token')) =>(
            api.get(`/auth`, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => (response.data.validator))
            .catch(err => (false))
    ) 
export const PrivateRoute = ( {component: Component, ...rest}) =>(
   <Async promise={isLogged} 
   then={(<Route 
    {...rest} 
        render={(props) =>
                (<Component {...props}/> )
   }/>)} 
    catch={(<Route 
        {...rest} 
            render={(props) =>
                    (<Redirect to={{pathname: '/login', state:{from: props.location}}}/> )
       }/>)}/>
   /* 
    <Route 
        {...rest} 
            render={ async (props) =>{

                if( await isLogged() === true) 
                {
                    return <Component {...props}/> 
                }else {
                return   <Redirect to={{pathname: '/login', state:{from: props.location}}}/>
                    
                }
            }
            }/> */
)
