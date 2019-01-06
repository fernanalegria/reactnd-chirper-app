import * as types from './types';
import { createReducer } from '../../utils';

export default createReducer(null)({
    [types.SET_AUTHED_USER]: (state, action) => action.id
}); 