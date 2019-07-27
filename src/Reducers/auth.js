import { 
    EMAIL_USER,
    PASSWORD_USER,
    LOGGED_USER,
    LOGGED_USER_GET_ID
} from "../Constants/actionsType"


export default (state = {}, action) =>{
    switch (action.type) {
        case EMAIL_USER:
            return{
                ...state,
                user:{ ...state.user, email: action.email}
            }        
        case PASSWORD_USER:
            return{
                ...state,
                user:{ ...state.user,  password: action.password}
            }
        case LOGGED_USER_GET_ID:
            return{
                ...state,
                user:{ ...state.user,  id: action.id}
                }
        case LOGGED_USER:
            return{
                ...state,
                token: {...state.token, token: action.token}
            }
        default:
            return state;
    }
}