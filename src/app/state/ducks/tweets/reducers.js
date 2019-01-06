import * as types from './types';
import { createReducer } from '../../utils';

export default createReducer({})({
  [types.RECEIVE_TWEETS]: (state, action) => ({ ...state, ...action.tweets })
});
