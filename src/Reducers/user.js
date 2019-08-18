import { LOADED_USER } from '../Constants/actionsType';

export default (state = { user: {} }, action) => {
  switch (action.type) {
    case LOADED_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
