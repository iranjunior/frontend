import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducers from '../Reducers';

import history from '../Routes/history';

export const middlewares = [thunk, routerMiddleware(history)];

const store = createStore(connectRouter(history)(reducers), applyMiddleware(...middlewares));

export default store;
