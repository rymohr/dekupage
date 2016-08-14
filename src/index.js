import React from 'react';
import ReactDOM from 'react-dom';
import { createApp } from './dekupage';
import App from './app/App';
import actions from './app/actions';
import './index.css';

let container = document.getElementById('root');

// TODO: app.reset(state), app.refresh(), app.remove()

// let render = createApp(App, actions)
// ReactDOM.render(render(props), container);

ReactDOM.render(
  createApp(<App />, actions)
, container);


// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(container)
// }, 10000);
