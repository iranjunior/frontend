import { UIDESIGN_CLICKED_AVATAR_BUTTON } from '../Constants/actionsType'

export default (state = {header:{clickedAvatarButton: null}}, action)=>{
    switch (action.type) {
        case UIDESIGN_CLICKED_AVATAR_BUTTON:
            return { ...state,
                header:{ 
                    ...state.header,
                    clickedAvatarButton: action.uiDesign
                    }
                }
        default:
            return state;
    }
}