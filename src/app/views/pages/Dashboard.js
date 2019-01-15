import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Your timeline</h3>
        <ul className='dashboard-list'>
            {
                this.props.tweetIds.map(id => (
                    <li key={id}>TWEET ID: {id}</li>
                ))
            }
        </ul>
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
