import camelcase from 'camelcase';

export default function createActions(actions) {
  let actionCreators = {};
  let reducers = {};

  Object.keys(actions).forEach((type) => {
    let action = actions[type];
    let actionCreator = camelcase(type);

    actionCreators[actionCreator] = createActionCreator(type, action.dispatch);
    reducers[type] = action.reduce;
  })

  return { actionCreators, reducers };
}

function createActionCreator(type, createPayload) {
  return (...args) => {
    return {type: type, payload: createPayload(...args)}
  }
}
