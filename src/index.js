import React from 'react';
import ReactDOM from 'react-dom';
import ToggleApp from './app/toggle/ToggleApp';
import CounterApp from './app/counter/CounterApp';
import './index.css';

class Container extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <button onClick={() => this.forceUpdate()}>force update</button>
        <ToggleApp initialState={{status: 'off', color: 'red'}} />
        <ToggleApp initialState={{status: 'off', color: 'red'}} />
        <ToggleApp initialState={{status: 'on', color: 'blue'}} />
        <CounterApp initialState={{total: 0}} />
        <CounterApp initialState={{total: 100}} />
        <CounterApp initialState={{total: 1000}} />
      </div>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
