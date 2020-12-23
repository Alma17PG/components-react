

import { SET_DIA, SET_USER, SET_TICKET } from '../constants';

const defaultState = {
  user: 'alma',
  dia: 'lunes',
  ticket: 'No se pudo',
};

const reducer = (state = defaultState, action) => {
  const { type, value } = action;
  switch (type) {
    case SET_USER:
      return { ...state, user: value };
    case SET_TICKET:
      return { ...state, ticket: value };
    case SET_DIA:
      return {...state, dia: value};
    default:
      return state;
  }
};

export default reducer;
