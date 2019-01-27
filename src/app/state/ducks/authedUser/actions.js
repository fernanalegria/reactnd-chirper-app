import * as types from './types';

/**
 * Sets the logged in user
 * @param  {string} id
 */
export const setAuthedUser = id => ({
  type: types.SET_AUTHED_USER,
  id
});
