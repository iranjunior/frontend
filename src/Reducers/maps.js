import { LOADED_LOCATIONS } from '../Constants/actionsType';

export default (state = {}, action) => {
  switch (action.type) {
    case LOADED_LOCATIONS:
      return { ...state, locations: action.locations };
    default:
      return state;
  }
};
