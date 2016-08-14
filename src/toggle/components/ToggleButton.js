import React from 'react';
import { createComponent } from '../../dekupage';

function connect(state) {
  return {status: state.status};
}

function render({props, actions}) {
  let { status } = props;
  let label, onClick;

  if (status === 'on') {
    label = "Toggle off";
    onClick = () => actions.toggleOff();
  } else {
    label = "Toggle on";
    onClick = () => actions.toggleOn();
  }

  return <button class="toggle-btn" onClick={onClick}>{label}</button>;
}

export default createComponent({ connect, render });
