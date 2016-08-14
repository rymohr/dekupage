import { combineReducers } from 'redux';
import log from './log';
import todos from './todos';

export default combineReducers({ log, todos });

// function reduce(state = [], action) {
//   return actions[action.type].reduce(action);
// }
