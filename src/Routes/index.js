import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import PrivateRoute   from './privateRoute';
import history from './history'

import Home  from '../Pages/Home';
import Login  from '../Pages/Login';


const Routes = (  ) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <PrivateRoute path='/' exact component={Home}/>
                <Route path='/login'  component={Login}/>
            </Switch>
        </ConnectedRouter>
    )
}
export default connect(state => ({ }))(Routes);