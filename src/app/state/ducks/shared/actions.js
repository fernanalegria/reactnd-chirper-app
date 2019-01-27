import { getInitialData } from '../../../../server/api';
import { tweetActions } from '../tweets';
import { userActions } from '../users';
import { authedUserActions } from '../authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'dan_abramov';

/**
 * Calls API to fetch the initial data and saves it into the Redux store
 */
export const handleFetchData = () => dispatch => {
  dispatch(showLoading());
  return getInitialData().then(({ users, tweets }) => {
    dispatch(userActions.receiveUsers(users));
    dispatch(tweetActions.receiveTweets(tweets));
    dispatch(authedUserActions.setAuthedUser(AUTHED_ID));
    dispatch(hideLoading());
  });
};
