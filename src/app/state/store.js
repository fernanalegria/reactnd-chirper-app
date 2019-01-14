import { createStore, combineReducers } from 'redux';
import * as reducers from './ducks';
import middleware from './middleware'

export default () => {
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, middleware);
};
