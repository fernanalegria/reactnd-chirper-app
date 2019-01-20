import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../../state/ducks/tweets/actions';

const MAX_LENGTH = 280;

class NewTweet extends Component {
  state = {
    text: ''
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
      this.setState({
        text: ''
      });
    });
  };

  render() {
    const { text } = this.state;
    const tweetLeft = MAX_LENGTH - text.length;

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
