import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sharedActions } from '../state/ducks/shared';
import Dashboard from './pages/Dashboard';
import NewTweet from './common/NewTweet'
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(sharedActions.handleFetchData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loadingBar && this.props.loadingBar.default === 0 && (
          <Dashboard />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ loadingBar }) => ({
  loadingBar
});

export default connect(mapStateToProps)(App);
