import * as types from './types';
import { saveLikeToggle } from '../../../../server/api'

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
}