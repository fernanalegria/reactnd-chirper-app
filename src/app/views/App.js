import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sharedActions } from '../state/ducks/shared';
import Dashboard from './pages/Dashboard';
import NewTweet from './common/NewTweet';
import TweetPage from './pages/TweetPage';
import LoadingBar from 'react-redux-loading';
import { isEmptyObject } from '../utils/helpers';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(sharedActions.handleFetchData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {!this.props.loading && (
          <TweetPage match={{ params: { id: '2mb6re13q842wu8n106bhk' } }} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => ({
  loading: !authedUser || isEmptyObject(users)
});

export default connect(mapStateToProps)(App);
