import * as types from './types';

export const receiveTweets = tweets => ({
  type: types.RECEIVE_TWEETS,
  tweets
});
