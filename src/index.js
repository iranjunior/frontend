import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom'; 

import App from './App';
import store   from './Store';
import history from './Routes/history';

ReactDOM.render( (
        
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path='/' component={App}/>
        </ConnectedRouter>
    </Provider>
    
    ), document.getElementById('root'));
