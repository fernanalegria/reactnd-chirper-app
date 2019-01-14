import { combineReducers } from 'redux';
import { default as authedUser } from './authedUser';
import { default as tweets } from './tweets';
import { default as users } from './users';

export default combineReducers({
    authedUser,
    tweets,
    users
});