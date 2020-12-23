import { SET_TICKET, SET_USER } from '../constants';

const defaultState = {
  user: 'alma',
  ticket: 'No se pudo',
};

const reducer = (state = defaultState, action) => {
  const { type, value } = action;
  switch (type) {
    case SET_USER:
      return { ...state, user: value };
    case SET_TICKET:
      return { ...state, ticket: value };
    default:
      return state;
  }
};

export default reducer;
