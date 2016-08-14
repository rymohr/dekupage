import React from 'react';
import { createComponent } from '../dekupage';
import actions from './actions';

function connect(state) {
  return {total: state.total};
}

function render({props, actions}) {
  let { total } = props;
  let { decrement, increment } = actions;

  return (
    <div class="counter-app">
      <button onClick={() => decrement()}>-</button>
      <span class="total">{total}</span>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}

// let Counter = connect({ render }, (state) => {
//   return {total: state.total};
// })

// if actions are given, component will be wrapped in a <Provider/>
let Counter = createComponent({ render }); // , { render }, actions
let CounterApp = createApp(Counter, actions);

export default Counter;
