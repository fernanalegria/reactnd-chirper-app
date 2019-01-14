import { createStore, combineReducers } from 'redux';
import * as reducers from './ducks';

export default () => {
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer);
};
