import { LOADED_SPECIALITIES, SET_SPECIALITIES } from '../Constants/actionsType';

export default (state = { specialities: [], setSpecialities: [] }, action) => {
  switch (action.type) {
    case LOADED_SPECIALITIES:
      return {
        ...state,
        specialities: action.specialities,
      };
    case SET_SPECIALITIES:
      return {
        ...state,
        setSpecialities: action.specialities,
      };
    default:
      return state;
  }
};
