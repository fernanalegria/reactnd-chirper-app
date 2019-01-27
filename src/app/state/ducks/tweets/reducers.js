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
  }),
  [types.ADD_TWEET]: (state, action) => {
    let replyingTo = {};
    if (action.tweet.replyingTo) {
      replyingTo = {
        [action.tweet.replyingTo]: {
          ...state[action.tweet.replyingTo],
          replies: [...state[action.tweet.replyingTo].replies, action.tweet.id]
        }
      };
    }

    return {
      ...state,
      [action.tweet.id]: action.tweet,
      ...replyingTo
    };
  }
});

const likesReducer = createReducer([])({
  [types.TOGGLE_TWEET]: (state, action) =>
    action.hasLiked
      ? state.filter(tweetId => tweetId !== action.authedUser)
      : [...state, action.authedUser]
});
