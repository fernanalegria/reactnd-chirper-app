import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet, formatDate } from '../../utils/helpers';
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline
} from 'react-icons/ti';
import { handleToggleTweet } from '../../state/ducks/tweets/actions';

class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefault();
    // TODO: Redirect to parent tweet
  };

  toggleTweet = e => {
    const {
      authedUser,
      tweet: { id, hasLiked }
    } = this.props;
    e.preventDefault();
    this.props.handleToggleTweet({
      id,
      authedUser,
      hasLiked
    });
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
            <button className="tweet-button" onClick={this.toggleTweet}>
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

const mapDispatchToProps = {
  handleToggleTweet: info => handleToggleTweet(info)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tweet);
