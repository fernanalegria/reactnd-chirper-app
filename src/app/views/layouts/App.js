import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sharedActions } from '../../state/ducks/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(sharedActions.handleFetchData());
  }

  render() {
    return <div>Starter Code</div>;
  }
}

export default connect()(App);
