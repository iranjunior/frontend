import { 
    LOADED_VACANCIES, ORDER_VACANCIES
} from "../Constants/actionsType"


export default (state = {vacancies: [], order: 'none'}, action) =>{

    switch (action.type) {
        case LOADED_VACANCIES:
            return{
                ...state,
                vacancies: action.vacancies
            }
        case ORDER_VACANCIES:
            return{
                ...state,
                order: action.order
            }
        default:
            return state;
    }
}