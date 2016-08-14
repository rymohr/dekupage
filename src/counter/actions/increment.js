function reduce(state) {
  return {...state, total: state.total + 1};
}

export default { reduce };
