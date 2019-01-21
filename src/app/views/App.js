import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { sharedActions } from '../state/ducks/shared';
import Dashboard from './pages/Dashboard';
import NewTweet from './common/NewTweet';
import TweetPage from './pages/TweetPage';
import Nav from './Nav';
import LoadingBar from 'react-redux-loading';
import { isEmptyObject } from '../utils/helpers';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(sharedActions.handleFetchData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {!this.props.loading && (
              <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/new" component={NewTweet} />
                <Route path="/tweet/:id" component={TweetPage} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => ({
  loading: !authedUser || isEmptyObject(users)
});

export default connect(mapStateToProps)(App);
