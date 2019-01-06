import { getInitialData } from '../../../../server/api';
import { tweetActions } from '../tweets';
import { userActions } from '../users';
import { authedUserActions } from '../authedUser';

const AUTHED_ID = 'dan_abramov';

export const handleFetchData = () => dispatch => {
  getInitialData().then(({ users, tweets }) => {
    dispatch(userActions.receiveUsers(users));
    dispatch(tweetActions.receiveTweets(tweets));
    dispatch(authedUserActions.setAuthedUser(AUTHED_ID));
  });
};
