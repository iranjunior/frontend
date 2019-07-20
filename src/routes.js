import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home  from './Pages/Home';
import Login  from './Pages/Login';
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/login' exact component={Login}/>
        </Switch>
    )
}
export default Routes;