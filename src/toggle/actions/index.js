import { createActions } from '../../dekupage';

export default createActions({
  TOGGLE_ON: require('./toggleOn').default,
  TOGGLE_OFF: require('./toggleOff').default,
})
