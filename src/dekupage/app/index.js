import React from 'react';
import ReactDOM from 'react-dom';

class Provider extends React.Component {
  getChildContext() {
    return {
      context: this.props.context,
      dispatch: this.props.dispatch,
      actions: this.props.actions
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

Provider.childContextTypes = {
  context: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  actions: React.PropTypes.object.isRequired
};

function bindActionCreators(actions, dispatch) {
  let { actionCreators } = actions;
  let boundActionCreators = {};

  Object.keys(actionCreators).forEach((action) => {
    boundActionCreators[action] = (...args) => {
      return dispatch(actionCreators[action](...args));
    }
  })

  return boundActionCreators;
}

// TODO: ReactDOM.unmountComponentAtNode(domContainerNode) ???
function createApp(container, store, actions = {}) {
  let { dispatch } = store;
  let actionCreators = bindActionCreators(actions, dispatch);

  return (element, context = {}) => {
    return ReactDOM.render(
      <Provider context={context}
                dispatch={dispatch}
                actions={actionCreators}>
        {element}
      </Provider>
    , container);
  }
}

export default createApp;
