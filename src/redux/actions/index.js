/* eslint-disable import/prefer-default-export */
import { SET_USER, SET_DIA } from '../constants';

export const setUser = (value) => ({
  type: SET_USER,
  value,
});

export const setDia = (value) => ({
  type: SET_DIA,
  value,
});
