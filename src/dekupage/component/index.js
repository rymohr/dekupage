import React from 'react';
import ReactDOM from 'react-dom';
import translate from '../utils/translate';

function createComponent(component) {
  class DekupageComponent extends React.Component {
    constructor(props) {
      super(props);

      this.findDOMNode = () => ReactDOM.findDOMNode(this);
      // this.invoke('onCreate');
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {}
    // componentWillReceiveProps(nextProps, nextContext) {}
    // componentWillUpdate(nextProps, nextState, nextContext) {}

    componentDidMount() {
      return this.invoke('onCreate');
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
      return this.invoke('onUpdate');
    }

    componentWillUnmount() {
      return this.invoke('onRemove');
    }

    render() {
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
        props: this.props,
        context: this.context.context,
        dispatch: this.context.dispatch,
        actions: this.context.actions,
        path: null, // not available within react, use findDOMNode instead
        findDOMNode: this.findDOMNode
      }
    }
  }

  DekupageComponent.contextTypes = {
    context: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  return DekupageComponent;
}

export default createComponent;
