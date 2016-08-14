export default function bindActionCreators(actions, dispatch) {
  let { actionCreators } = actions;
  let boundActionCreators = {};

  Object.keys(actionCreators).forEach((action) => {
    boundActionCreators[action] = (...args) => {
      return dispatch(actionCreators[action](...args));
    }
  })

  return boundActionCreators;
}
