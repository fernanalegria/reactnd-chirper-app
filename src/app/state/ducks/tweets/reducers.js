import * as types from './types';
import { createReducer } from '../../utils';

export default createReducer({})({
  [types.RECEIVE_TWEETS]: (state, action) => ({ ...state, ...action.tweets }),
  [types.TOGGLE_TWEET]: (state, action) => ({
    ...state,
    [action.id]: {
      ...state[action.id],
      likes: likesReducer(state[action.id].likes, action)
    }
  })
});

const likesReducer = createReducer([])({
  [types.TOGGLE_TWEET]: (state, action) =>
    action.hasLiked
      ? state.filter(tweetId => tweetId !== action.authedUser)
      : [...state, action.authedUser]
});
