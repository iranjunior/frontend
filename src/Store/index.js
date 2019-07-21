import { createStore } from "redux"
import reducers from '../Reducers'
import { connectRouter } from 'connected-react-router'


import history from "../Routes/history";

const store = createStore( connectRouter(history)(reducers) )

export default store;