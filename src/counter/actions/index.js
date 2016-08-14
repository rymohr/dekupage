import { createActions } from '../../dekupage';

export default createActions({
  INCREMENT: require('./increment').default,
  DECREMENT: require('./decrement').default,
})
