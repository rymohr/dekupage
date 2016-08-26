import React from 'react';
import { translateProps } from './translate';

export default function createElement(type, props, ...children) {
  let reactProps = translateProps(props);
  let reactChildren = 'dangerouslySetInnerHTML' in reactProps ? null : children;

  return React.createElement(type, reactProps, reactChildren);
}
