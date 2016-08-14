/* @jsx createElement */
import { createElement, createComponent } from '../dekupage';
import ToggleButton from './components/ToggleButton';
import './ToggleApp.css';

function connect(state) {
  return {color: state.color};
}

function render({props, actions}) {
  let { color } = props;

  return (
    <div class="toggle-app">
      <p>
        <ToggleButton />
      </p>

      <div style={{ color }} innerHTML="<strong>this is innerHTML</strong>" />
    </div>
  );
}

export default createComponent({ connect, render });
