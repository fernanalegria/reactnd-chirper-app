import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sharedActions } from '../state/ducks/shared';
import Dashboard from './pages/Dashboard';
import { isEmptyObject } from '../utils/helpers';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(sharedActions.handleFetchData());
  }

  render() {
    return <div>{!this.props.loading && <Dashboard />}</div>;
  }
}

const mapStateToProps = state => ({
  loading:
    !state.authedUser ||
    isEmptyObject(state.tweets) ||
    isEmptyObject(state.users)
});

export default connect(mapStateToProps)(App);
