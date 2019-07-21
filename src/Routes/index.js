import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import history from './history'

import Home  from '../Pages/Home';
import Login  from '../Pages/Login';
import { isAuthenticate }  from '../Services/auth';

const PrivateRoute = ({component: Component, token, ...rest}) =>(
    <Route {...rest} render={(props) =>
        isAuthenticate(token) ? (
        <Component {...props}/> 
        ) :(
        <Redirect to={{pathname: '/login', state:{from: props.location}}}/>
        )
    }/>
)

const Routes = (token) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login'  component={Login}/>
            </Switch>
        </ConnectedRouter>
    )
}
export default connect(state => ({token: state.auth.token}))(Routes);