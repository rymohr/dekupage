/* @jsx createElement */
import React from 'react';
import { createElement, createComponent } from '../../../dekupage';

function connect(state) {
  return {total: state.total};
}

function render({props, actions}) {
  let { total } = props;
  let { decrement, increment, autoincrement } = actions;

  return (
    <div class="counter-app">
      <button onClick={() => decrement()}>-</button>
      <span class="total">{total}</span>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => autoincrement()}>++</button>
    </div>
  );
}

// if actions are given, component will be wrapped in a <Provider/>
export default createComponent({ connect, render });
