export default function bindActionCreators(actions, dispatch) {
  let { actionCreators } = actions;
  let boundActionCreators = {};

  Object.keys(actionCreators).forEach((actionType) => {
    boundActionCreators[actionType] = (...args) => {
      let actionCreator = actionCreators[actionType];
      let action = actionCreator(...args);

      if (typeof action.payload === 'function') {
        // TODO: can we handle this in createActions instead?
        return action.payload(boundActionCreators);
      } else {
        return dispatch(action);
      }
    }
  })

  return boundActionCreators;
}
