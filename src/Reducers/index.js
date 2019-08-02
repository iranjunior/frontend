import auth from './auth'
import user from './user'
import specialities from './specialities'
import uiDesign from './uiDesign'
import vacancies from './vacancies'
import routes from './routes'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../Routes/history';


export default combineReducers({auth, user, uiDesign, vacancies, specialities, routes ,router: connectRouter(history)});