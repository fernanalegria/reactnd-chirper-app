import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from '../common/Tweet';
import NewTweet from '../common/NewTweet';
import ListTweets from '../common/ListTweets';
import PropTypes from 'prop-types';

const { arrayOf, string } = PropTypes;

/**
 * Tweet page which consists of the tweet itself, its replies and a form to reply to it
 */
class TweetPage extends Component {
  static propTypes = {
    id: string.isRequired,
    replies: arrayOf(string).isRequired
  };

  render() {
    const { id, replies } = this.props;
    return (
      <div>
        <Tweet id={id} />
        <NewTweet id={id} />
        {replies.length > 0 && <h3 className="center">Replies</h3>}
        <ListTweets tweetIds={replies} />
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }, props) => {
  const { id } = props.match.params;

  return {
    id,
    replies: tweets[id]
      ? tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        )
      : []
  };
};

export default connect(mapStateToProps)(TweetPage);
