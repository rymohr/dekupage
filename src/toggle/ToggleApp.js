import React from 'react';
import { createComponent } from '../dekupage';
import ToggleButton from './components/ToggleButton';
import './ToggleApp.css';

function connect(state) {
  return {todos: state.todos, color: state.color};
}

function render({props, actions}) {
  let { todos, color } = props;

  return (
    <div class="toggle-app">
      <p>
        <ToggleButton />
      </p>

      <ul>
        {todos.map((todo, i) => <li key={i}>{todo.text}</li>)}
      </ul>

      <div style={{ color }} innerHTML="<strong>this is innerHTML</strong>" />
    </div>
  );
}

export default createComponent({ connect, render });
