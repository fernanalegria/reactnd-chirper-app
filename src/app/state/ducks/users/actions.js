import * as types from './types';

/**
 * Saves an array of users in the Redux store
 * @param  {Array} users
 */
export const receiveUsers = users => ({
  type: types.RECEIVE_USERS,
  users
});
