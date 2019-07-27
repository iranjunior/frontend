import { CLICKED_AWAY } from '../Constants/actionsType'

export default (state = {uiDesign:{clickedAway: false,}}, action)=>{
    console.log(state);
    switch (action.type) {
        case CLICKED_AWAY:
            return { ...state,
                uiDesign:{ 
                    ...state.uiDesign,
                    clickedAway: action.uiDesign
                    }
                }
        default:
            return state;
    }
}