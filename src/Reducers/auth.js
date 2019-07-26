import { 
    EMAIL_USER,
    PASSWORD_USER,
    LOGGED_USER,
    LOGGED_USER_ID_TOKEN
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
        case LOGGED_USER:
            return{
                ...state,
                token: {...state.token, token: action.token}
            }
        case LOGGED_USER_ID_TOKEN:
            return{
                ...state,
                token: {...state.token, id: action.id}
            }
        default:
            return state;
    }
}