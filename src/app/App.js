import React from 'react';
import { createComponent } from '../dekupage';
import Button from './button';
import './App.css';

function connect(state) {
  return {todos: state.todos, color: state.color};
}

function render({props, actions}) {
  let { todos, color } = props;

  debugger;

  return (
    <div class="app">
      <p>
        <Button />
      </p>

      <ul>
        {todos.map((todo, i) => <li key={i}>{todo.text}</li>)}
      </ul>

      <div style={{ color }} innerHTML="<strong>this is innerHTML</strong>" />
    </div>
  );
}

function onCreate({props, context, dispatch}) {
  console.log('dekupage onCreate called');
}

function onUpdate({props, context, dispatch, findDOMNode}) {
  console.log('dekupage onUpdate called', findDOMNode());
}

function onRemove({props, context, dispatch}) {
  console.log('dekupage onRemove called');
}

export default createComponent({ connect, render, onCreate, onUpdate, onRemove });
