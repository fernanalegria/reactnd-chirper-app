
/**
 * Formats a date passed in as timestamp in order to be displayed
 * @param  {number} timestamp
 */
export const formatDate = timestamp => {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString('en-US');
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
};

/**
 * Adapts the tweet structure to easily display it in React
 * @param  {Object} tweet
 * @param  {Object} author
 * @param  {string} authedUser
 * @param  {(Object|null)} parentTweet
 */
export const formatTweet = (tweet, author, authedUser, parentTweet) => {
  const { id, likes, replies, text, timestamp } = tweet;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    timestamp,
    text,
    avatar: avatarURL,
    likes: likes.length,
    replies: replies.length,
    hasLiked: likes.includes(authedUser),
    parent: !parentTweet
      ? null
      : {
          author: parentTweet.author,
          id: parentTweet.id
        }
  };
};

/**
 * Returns true if the object is empty
 * @param  {Object} obj
 */
export const isEmptyObject = obj => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};
