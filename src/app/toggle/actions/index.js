import { createActions } from '../../../dekupage';

export default createActions({
  INIT: require('./init'),
  TOGGLE_ON: require('./toggleOn'),
  TOGGLE_OFF: require('./toggleOff'),
})
