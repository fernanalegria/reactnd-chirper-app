/**
 * Middleware to log any dispatched action and the new state after the dispatch
 * @param  {Object} store
 */
const logger = store => next => action => {
  console.group(action.type);
  const result = next(action);
  console.log('Action: ', result);
  console.log('New state: ', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
