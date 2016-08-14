import React from 'react';
import createStore from 'redux';
import createApp from './app';
import createElement from './utils/createElement';
import createComponent from './component';
import createActions from './actions';
import createReducer from './reducer';
import loadActions from './utils/loadActions';

let Dekupage = {
  createApp,
  createStore,
  createElement,
  createComponent,
  loadActions
}

export {
  Dekupage as default,
  createStore,
  createApp,
  createElement,
  createComponent,
  createActions,
  createReducer,
  loadActions
}
