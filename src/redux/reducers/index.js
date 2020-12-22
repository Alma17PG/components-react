import { SET_USER } from '../constants';

const defaultState = {
  user: 'alma',
};

const reducer = (state = defaultState, action) => {
  const { type, value } = action;
  switch (type) {
    case SET_USER:
      return { ...state, user: value };
    default:
      return state;
  }
};

export default reducer;
