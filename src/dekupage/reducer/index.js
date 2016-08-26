export default function createReducer(actions, initialState = {}) {
  let { reducers } = actions;

  return (state = initialState, action) => {
    let reducer = reducers[action.type];

    if (reducer) {
      if (action.payload instanceof Array) {
        // direct dispatching
        return reducer(state, ...action.payload);
      } else {
        return reducer(state, action.payload);
      }
    } else {
      return state;
    }
    return reducer ? reducer(state, action.payload) : state;
  }
}
