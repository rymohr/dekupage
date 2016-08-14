import React from 'react';
import { translateProps } from './translate';

export default function createElement(type, props, children) {
  return React.createElement(type, translateProps(props), children);
}
