import { SETTING_HOSPITALS_NAME } from '../Constants/actionsType';

export default (state = {}, action) => {
  switch (action.type) {
    case SETTING_HOSPITALS_NAME:
      return {
        ...state,
        hospitals: {
          ...state.hospitals,
          name: action.hospitals,
        },
      };
    default:
      return state;
  }
};
