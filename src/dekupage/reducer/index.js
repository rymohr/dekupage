export default function createReducer(actions, initialState = {}) {
  let { reducers } = actions;

  return (state = initialState, action) => {
    let reducer = reducers[action.type];
    return reducer ? reducer(state, action.payload) : state;
  }
}
