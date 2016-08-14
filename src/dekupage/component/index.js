import React from 'react';
import ReactDOM from 'react-dom';
import shallowEqual from 'shallowequal';
import translate from '../utils/translate';

function createComponent(component, actions) {
  let pure = true;
  let connected = typeof component.connect === 'function';

  class DekupageComponent extends React.Component {
    // TODO: displayName
    constructor(props, context) {
      super(props, context);

      this.propsChanged = false;

      this.findDOMNode = () => ReactDOM.findDOMNode(this);
      // this.invoke('onCreate');

      let componentProps = connected ? this.getComponentProps() : {};
      this.state = { componentProps };
    }

    shouldComponentUpdate() {
      return !pure || this.propsChanged || this.stateChanged;
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {}
    componentWillReceiveProps(nextProps, nextContext) {
      if (!pure || !shallowEqual(nextProps, this.props)) {
        this.propsChanged = true
      }
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {}

    componentDidMount() {
      if (connected) {
        let { store } = this.context;
        this.unsubscribe = store.subscribe(this.handleUpdate.bind(this));
      }

      return this.invoke('onCreate');
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
      return this.invoke('onUpdate');
    }

    componentWillUnmount() {
      return this.invoke('onRemove');
    }

    render() {
      this.propsChanged = false;
      this.stateChanged = false;

      return translate(this.invoke('render'));
    }

    invoke(method) {
      // let { component } = this.props;

      if (component[method]) {
        let model = this.getModel();
        return component[method](model);
      }
    }

    getModel() {
      return {
        props: {...this.props, ...this.state.componentProps},
        actions: this.context.actions,
        path: null, // not available within react, use findDOMNode instead
        findDOMNode: this.findDOMNode
      }
    }

    handleUpdate() {
      let componentProps = this.getComponentProps();

      if (!shallowEqual(componentProps, this.state.componentProps)) {
        this.stateChanged = true;
        this.setState({ componentProps });
      }
    }

    getComponentProps() {
      let { store } = this.context;
      return component.connect(store.getState());
    }
  }

  DekupageComponent.contextTypes = {
    store: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  if (actions) {
    // TODO: return createApp(DekupageComponent, actions);
  } else {
    return DekupageComponent;
  }
}

export default createComponent;
