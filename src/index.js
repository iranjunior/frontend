import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

import App from './App';
import * as serviceWorker from './serviceWorker';
=======
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router'; 
>>>>>>> 63cd01a06a06c7f0333d67b6947d6e08b1e53b99

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
