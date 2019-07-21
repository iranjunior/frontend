import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import history from './history'

import Home  from '../Pages/Home';
import Login  from '../Pages/Login';
const Routes = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
            </Switch>
        </ConnectedRouter>
    )
}
export default Routes;