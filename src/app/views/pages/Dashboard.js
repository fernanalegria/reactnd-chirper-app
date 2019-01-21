import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListTweets from '../common/ListTweets';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Your timeline</h3>
        <ListTweets tweetIds={this.props.tweetIds} />
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }) => ({
  tweetIds: Object.keys(tweets).sort(
    (a, b) => tweets[b].timestamp - tweets[a].timestamp
  )
});

export default connect(mapStateToProps)(Dashboard);
