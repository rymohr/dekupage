import React from 'react';
import { createComponent } from '../dekupage';

function render({props, context, dispatch, actions}) {
  let { addTodo } = actions;
  return <button class="btn" onClick={() => addTodo(Math.random())}>Add Todo</button>;
}

export default createComponent({ render });
