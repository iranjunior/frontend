import { 
    LOADED_VACANCIES
} from "../Constants/actionsType"


export default (state = {vacancies: {}}, action) =>{

    switch (action.type) {
        case LOADED_VACANCIES:
            return{
                ...state,
                vacancies: action.vacancies
            }
        default:
            return state;
    }
}