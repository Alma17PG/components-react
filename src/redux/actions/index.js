/* eslint-disable import/prefer-default-export */
import { SET_USER, SET_DIA, SET_TICKET } from '../constants';

export const setUser = (value) => ({
  type: SET_USER,
  value,
});

export const setTicket = (value) => ({
  type: SET_TICKET,
  value,
});

export const setDia = (value) => ({
  type: SET_DIA,
  value,
});
