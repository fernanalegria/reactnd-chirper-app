import * as types from './types';
import { saveLikeToggle, saveTweet } from '../../../../server/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const receiveTweets = tweets => ({
  type: types.RECEIVE_TWEETS,
  tweets
});

const toggleTweet = ({ id, authedUser, hasLiked }) => ({
  type: types.TOGGLE_TWEET,
  id,
  authedUser,
  hasLiked
});

export const handleToggleTweet = info => dispatch => {
  dispatch(toggleTweet(info));
  return saveLikeToggle(info).catch(e => {
    console.warn('Error in handleToggleTweet: ', e);
    dispatch(toggleTweet(info));
    alert('There was an error liking the tweet. Try again.');
  });
};

const addTweet = tweet => ({
  type: types.ADD_TWEET,
  tweet
});

export const handleAddTweet = (text, replyingTo, callback) => (
  dispatch,
  getState
) => {
  const { authedUser } = getState();

  dispatch(showLoading());
  return saveTweet({
    text,
    author: authedUser,
    replyingTo
  }).then(tweet => {
    dispatch(addTweet(tweet));
  }).then(() => {
    dispatch(hideLoading());
    if (callback) {
      callback();
    }
  });
};
