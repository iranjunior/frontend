import { createStore } from "redux"

const INITIAL_STATE = {
    token: null,
    user: {},
    informations: {}
}

function reducers(state = INITIAL_STATE, action) {
    console.log(state);
    switch (action.type) {
        case 'EMAIL_USER':
            return{
                ...state,
                user:{ ...state.user, email: action.email}
            }        
        case 'PASSWORD_USER':
            return{
                ...state,
                user:{ ...state.user,  password: action.password}
            }
        case 'LOGGED_USER':
            return{
                ...state,
                token: action.token
            }
        default:
            return state;
}
}

const store = createStore(reducers)

export default store;