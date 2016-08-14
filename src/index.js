import React from 'react';
import { createApp, createReducer } from './dekupage';
import { createStore } from 'redux';
import App from './App';
// import reducer from './app/reducers';
// import * as actions from './app/actions';
import actions from './app/actions';
import './index.css';

let container = document.getElementById('root');

// TODO: createApp(<App />, actions) instead?
let reducer = createReducer(actions, {todos: []});
let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
let render = createApp(container, store, actions);

function refresh() {
  render(<App />, store.getState());
}

store.subscribe(refresh);

refresh();
