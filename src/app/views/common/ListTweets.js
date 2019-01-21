import React from 'react';
import Tweet from './Tweet';

const ListTweets = props => (
  <ul>
    {props.tweetIds.map(id => (
      <li key={id}>
        <Tweet id={id} />
      </li>
    ))}
  </ul>
);

export default ListTweets;
