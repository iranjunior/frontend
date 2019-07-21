import { createStore } from "redux"
import reducers from '../Reducers'
import { ConnectedRouter } from 'connected-react-router'

import history from "../Routes/history";

const store = createStore( ConnectedRouter(history)(reducers) )

export default store;