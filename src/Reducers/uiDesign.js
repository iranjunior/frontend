import { UIDESIGN_CLICKED_AVATAR_BUTTON, UIDESIGN_CLICKED_SELECT_ORDER_VACANCIES } from '../Constants/actionsType'

export default (state = {header:{clickedAvatarButton: null}, panel:{selectedOrderVacancy: 'none'}}, action)=>{
    switch (action.type) {
        case UIDESIGN_CLICKED_AVATAR_BUTTON:
            return { ...state,
                header:{ 
                    ...state.header,
                    clickedAvatarButton: action.uiDesign
                    }
                }
         case UIDESIGN_CLICKED_SELECT_ORDER_VACANCIES:
             return{
                 ...state,
                 panel:{
                    ...state.panel, 
                    selectedOrderVacancy: action.value
                 }
             }
        default:
            return state;
    }
}