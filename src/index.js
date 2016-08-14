import React from 'react';
import ReactDOM from 'react-dom';
import { createApp } from './dekupage';
import ToggleApp from './toggle/ToggleApp';
import ToggleActions from './toggle/actions';
import CounterApp from './counter/CounterApp';
import CounterActions from './counter/actions';
import './index.css';

let container = document.getElementById('root');

// TODO: app.reset(state), app.refresh(), app.remove()

// let render = createApp(App, actions)
// ReactDOM.render(render(props), container);

ReactDOM.render(
  <div className='wrapper'>
    {createApp(<ToggleApp />, ToggleActions, {todos: []})}
    {createApp(<CounterApp />, CounterActions, {total: 0})}
  </div>
, container);


// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(container)
// }, 10000);
