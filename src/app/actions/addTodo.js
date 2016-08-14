// payload creator
function dispatch(text) {
  return { text };
}

// action handler / reducer
function reduce(state, { text }) {
  return {
    ...state,
    todos: [{ text }].concat(state.todos)
  }
}

export default { dispatch, reduce };

// createAction('ADD_TODO', { dispatch, reduce });
