/* eslint-disable import/prefer-default-export */
import { SET_USER } from '../constants';

export const setUser = (value) => ({
  type: SET_USER,
  value,
});
