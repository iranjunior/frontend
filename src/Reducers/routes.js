import { 
    CHANGE_ROUTE
} from "../Constants/actionsType"


export default (state = {route: 'panel'}, action) =>{

    switch (action.type) {
        case CHANGE_ROUTE:
            return{
                ...state,
                route: action.route
            }
        default:
            return state;
    }
}