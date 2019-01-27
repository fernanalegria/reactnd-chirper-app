import * as types from './types';
import { saveLikeToggle, saveTweet } from '../../../../server/api';
import { showLoading, hideLoading } from 'react-redux-loading';

/**
 * Saves an array of tweets in the Redux store
 * @param  {Array} tweets
 */
export const receiveTweets = tweets => ({
  type: types.RECEIVE_TWEETS,
  tweets
});

/**
 * Likes/Unlikes a tweet
 * @param  {string} id
 * @param  {string} authedUser
 * @param  {boolean} hasLiked
 */
const toggleTweet = ({ id, authedUser, hasLiked }) => ({
  type: types.TOGGLE_TWEET,
  id,
  authedUser,
  hasLiked
});

/**
 * Calls API to like/unlike a tweet
 * @param  {string} info Id, author and whether they've liked the tweet or unliked it
 */
export const handleToggleTweet = info => dispatch => {
  dispatch(toggleTweet(info));
  return saveLikeToggle(info).catch(e => {
    console.warn('Error in handleToggleTweet: ', e);
    dispatch(toggleTweet(info));
    alert('There was an error liking the tweet. Try again.');
  });
};

/**
 * Saves a new tweet in the Redux store
 * @param  {Object} tweet
 */
const addTweet = tweet => ({
  type: types.ADD_TWEET,
  tweet
});

/**
 * Saves a new tweet in the Redux store
 * @param  {string} text
 * @param  {string} replyingTo
 * @param  {function} callback
 */
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
