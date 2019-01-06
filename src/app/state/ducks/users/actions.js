import * as types from './types';

export const receiveUsers = users => ({
  type: types.RECEIVE_USERS,
  users
});
