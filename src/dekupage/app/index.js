import React from 'react';
import { createStore } from 'redux';
import createReducer from '../reducer';
import bindActionCreators from '../utils/bindActionCreators';

class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store,
      actions: this.props.actions
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

// TODO: higher order component instead?
export default function createApp(element, actions = {}, initialState = {}) {
  let reducer = createReducer(actions, initialState);
  let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
  let actionCreators = bindActionCreators(actions, store.dispatch);

  return (
    <Provider store={store} actions={actionCreators}>
      {element}
    </Provider>
  );
}
