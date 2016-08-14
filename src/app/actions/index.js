import { createActions } from '../../dekupage';

export function addTodo(text) {
  return {type: 'ADD_TODO', text: text};
}

export default createActions({
  ADD_TODO: require('./addTodo').default
})
