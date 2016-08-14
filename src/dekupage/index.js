import React from 'react';
import createStore from 'redux';
import createApp from './app';
import createComponent from './component';
import createActions from './actions';
import createReducer from './reducer';

function createElement(type, props, children) {
  return React.createElement(type, props, children);
}

let Dekupage = {
  createApp,
  createStore,
  createElement,
  createComponent
}

export {
  Dekupage as default,
  createStore,
  createApp,
  createComponent,
  createActions,
  createReducer
}
