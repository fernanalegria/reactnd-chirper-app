import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet, formatDate } from '../../utils/helpers';
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline
} from 'react-icons/ti';
import { handleToggleTweet } from '../../state/ducks/tweets/actions';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { tweetShape } from '../propTypes';

const { string, func } = PropTypes;

class Tweet extends Component {
  static propTypes = {
    id: string.isRequired,
    authedUser: string.isRequired,
    tweet: tweetShape.isRequired,
    handleToggleTweet: func.isRequired
  };

  toParent = (e, id) => {
    e.preventDefault();
    if (this.props.location.pathname !== `/tweet/${id}`) {
      this.props.history.push(`/tweet/${id}`);
    }
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

  toTweet = e => {
    const { tweet, location } = this.props;
    if (location.pathname === `/tweet/${tweet.id}`) {
      e.preventDefault();
    }
  };

  render() {
    if (!this.props.tweet) {
      return <p className="center">This tweet doesn't exist</p>;
    }

    const {
      id,
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
      <Link to={`/tweet/${id}`} onClick={this.toTweet} className="tweet">
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
      </Link>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Tweet)
);
