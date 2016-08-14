import React from 'react';
import { createComponent } from './dekupage';
import Button from './app/button';
import './App.css';

function render({props, context, dispatch}) {
  let { todos } = context;

  return (
    <div class="app">
      <p>
        <Button />
      </p>

      <ul>
        {todos.map((todo, i) => <li key={i}>{todo.text}</li>)}
      </ul>

      <div style={{color: context.color}} innerHTML="<strong>this is innerHTML</strong>" />
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

export default createComponent({ render, onCreate, onUpdate, onRemove });
