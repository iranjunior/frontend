import auth from './auth'
import user from './user'
import uiDesign from './uiDesign'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../Routes/history';


export default combineReducers({auth, user, uiDesign,router: connectRouter(history)});