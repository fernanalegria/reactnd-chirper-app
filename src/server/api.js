import { _getUsers, _getTweets, _saveLikeToggle, _saveTweet } from './_DATA.js';

/**
 * Fetches initial data needed to load the app
 */
export function getInitialData() {
  return Promise.all([_getUsers(), _getTweets()]).then(([users, tweets]) => ({
    users,
    tweets
  }));
}

/**
 * Likes/Unlikes a tweet
 * @param  {Object} info Id, author and whether they've liked it or unliked it
 */
export function saveLikeToggle(info) {
  return _saveLikeToggle(info);
}

/**
 * @param  {} info Text, author and the tweet is replying to (if it's the case)
 */
export function saveTweet(info) {
  return _saveTweet(info);
}
