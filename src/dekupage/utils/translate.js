import React from 'react';

export function translate(component) {
  let props = translateProps(component.props);
  let children = translateChildren(component.props.children);

  return React.cloneElement(component, props, children);
}

export function translateProps(originalProps) {
  let props = {...originalProps};

  if ('class' in props) {
    props.className = props.class;
    delete props.class;
  }

  if ('innerHTML' in props) {
    props.dangerouslySetInnerHTML = {__html: props.innerHTML};
    delete props.innerHTML;
  }

  return props;
}

export function translateChildren(children) {
  return React.Children.map(children, child => {
    return React.isValidElement(child) ? translate(child) : child;
  })
}

export default translate;
