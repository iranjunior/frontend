import auth from './auth'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../Routes/history';


export default combineReducers({auth, router: connectRouter(history)});