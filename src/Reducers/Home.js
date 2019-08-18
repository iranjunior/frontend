import { LOGGED } from '../Constants/actionsType';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGGED:
      return { ...state, logged: !!action.logged };
    default:
      return state;
  }
};
