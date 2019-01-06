import * as types from './types';

export const setAuthedUser = id => ({
  type: types.SET_AUTHED_USER,
  id
});
