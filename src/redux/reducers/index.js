import { SET_DIA, SET_USER } from '../constants';

const defaultState = {
  user: 'alma',
  dia: 'lunes',
};

const reducer = (state = defaultState, action) => {
  const { type, value } = action;
  switch (type) {
    case SET_USER:
      return { ...state, user: value };
    case SET_DIA:
      return {...state, dia: value};
      default:
      return state;
  }
};

export default reducer;
