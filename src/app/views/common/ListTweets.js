import React from 'react';
import Tweet from './Tweet';
import PropTypes from 'prop-types';

const { arrayOf, string } = PropTypes;

/**
 * List of tweets
 */
const ListTweets = props => (
  <ul>
    {props.tweetIds.map(id => (
      <li key={id}>
        <Tweet id={id} />
      </li>
    ))}
  </ul>
);

ListTweets.propTypes = {
  tweetIds: arrayOf(string).isRequired
};

export default ListTweets;
