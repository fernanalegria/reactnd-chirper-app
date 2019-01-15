import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet, formatDate } from '../../utils/helpers';
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline
} from 'react-icons/ti';

class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefault();
    // TODO: Redirect to parent tweet
  };

  render() {
    if (!this.props.tweet) {
      return <p className="center">This tweet doesn't exist</p>;
    }

    const {
      name,
      timestamp,
      text,
      avatar,
      likes,
      replies,
      hasLiked,
      parent
    } = this.props.tweet;

    return (
      <div className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replying-to"
                onClick={e => {
                  this.toParent(e, parent.id);
                }}
              >
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icons">
            <button className="tweet-button">
              <TiArrowBackOutline className="tweet-icon" />
            </button>
            <span>{replies !== 0 && replies}</span>
            <button className="tweet-button">
              {hasLiked ? (
                <TiHeartFullOutline className="tweet-icon" color="#e0245e" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  };
};

export default connect(mapStateToProps)(Tweet);
