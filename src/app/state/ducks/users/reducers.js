import * as types from './types';
import { createReducer } from '../../utils';

export default createReducer({})({
  [types.RECEIVE_USERS]: (state, action) => ({ ...state, ...action.users })
});
