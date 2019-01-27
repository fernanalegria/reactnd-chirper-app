/**
 * Utility function to simplify the way to create reducers
 * @param  {any} initialState
 */
export default initialState => reducerMap => (state = initialState, action) => {
  const reducer = reducerMap[action.type];
  return reducer ? reducer(state, action) : state;
};
