import React from 'react';
import { createStore } from 'redux';
import createReducer from '../reducer';
import bindActionCreators from '../utils/bindActionCreators';

class DekupageProvider extends React.Component {
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

DekupageProvider.childContextTypes = {
  store: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

// Had to use a higher order component so we could render dekupage apps
// just like any other component and still be able to render multiple
// independent instances of the app.
//
// TODO: reset(state), refresh(), remove() ?
export default function createApp(Component, model = {}, actions = {}) {
  class DekupageApp extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.reducer = createReducer(actions, model);
      this.store = createStore(this.reducer, window.devToolsExtension && window.devToolsExtension());
      this.actionCreators = bindActionCreators(actions, this.store.dispatch);

      // TODO: defer until componentWillMount?
      let { init } = this.actionCreators;
      let { initialState } = props;

      init && init(initialState);
    }

    render() {
      return (
        <DekupageProvider store={this.store} actions={this.actionCreators}>
          <Component {...this.props} />
        </DekupageProvider>
      )
    }
  }

  return DekupageApp;
}
