import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../../state/ducks/tweets/actions';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const MAX_LENGTH = 280;
const { string, func } = PropTypes;

/**
 * Component that lets the user insert a new tweet and submit it
 */
class NewTweet extends Component {
  static propTypes = {
    id: string,
    handleAddTweet: func.isRequired
  };

  state = {
    text: '',
    toHome: false
  };

  handleChange = e => {
    const text = e.target.value;
    this.setState({
      text
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddTweet(this.state.text, this.props.id, () => {
      this.setState((currentState, props) => ({
        text: '',
        toHome: props.id ? false : true
      }));
    });
  };

  render() {
    const { text, toHome } = this.state;
    const tweetLeft = MAX_LENGTH - text.length;

    if (toHome) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h3 className="center">Compose new Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            maxLength={MAX_LENGTH}
            onChange={this.handleChange}
            value={text}
            className="textarea"
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button className="btn" type="submit" disabled={text === ''}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleAddTweet: (text, replyingTo, cb) => handleAddTweet(text, replyingTo, cb)
};

export default connect(
  null,
  mapDispatchToProps
)(NewTweet);
