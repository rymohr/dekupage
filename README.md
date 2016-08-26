## Overview

- components + models + actions
- functional deku-inspired interface
- redux state management / devtools
- react ecosystem
- can be rendered within react components and contain react components

## Components

```js
/* @jsx createElement */
import { createElement, createComponent } from 'dekupage';

function connect(model) {
  return {total: model.total};
}

function render({props, actions}) {
  let { total } = props;
  let { decrement, increment } = actions;

  return (
    <div class="counter-app">
      <button onClick={() => decrement()}>-</button>
      <span class="total">{total}</span>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}

export default createComponent({ connect, render });
```

Using the `/* @jsx createElement */` pragma allows you to use:

- `class` instead of `className`
- `innerHTML={html}` instead of `dangerouslySetInnerHTML={{__html: html}}`

You are free to use react's default jsx processor if that kind of stuff
doesn't bother you.

## Applications

Apps are higher-order containers that connect components to actions / state.

```js
// TodoApp.jsx
import { createApp } from 'dekupage';
import TodoList from './components/TodoList';
import TodoModel from './model';
import TodoActions from './actions';

export default createApp(TodoList, TodoModel, TodoActions);
```

Dekupage applications can then be rendered just like any other react component:

```js
// index.js
import TodoApp from './TodoApp';

ReactDOM.render(
  <div className='app-container'>
    <TodoApp />
  </div>
)
```

## Actions / dispatching

Actions are passed to the `render` method of each component and are already
bound to the store's dispatcher.

```js
function render({ props, actions }) {
  let { addTodo } = actions;
  return <button onClick={() => addTodo('test')}>add todo</button>;
}
```

Each action is defined in its own file. Direct access to the dispatcher is
not allowed.

```js
// actions/addTodo.js

// the dispatch method is responsible for turning the arguments into a payload
export function dispatch(text) {
  return { text };
}

// the reduce method is responsible for applying the action to the model
export function reduce(model, { text }) {
  return {
    ...model,
    todos: [{ text }].concat(model.todos)
  };
}
```

Actions can dispatch other actions (synchronously or asynchronously) by
returning a function from `dispatch`. This function will be called with
the pre-bound action creators (the same ones passed to `render`).

```js
// actions/autoincrement.js
export function dispatch(interval) {
  return (actions) => {
    setInterval(actions.increment, interval);
  }
}
```

If an action does not define a `dispatch` method all arguments will be passed
directly to `reduce`. Internally, the action's payload will be the argument array.

```js
// actions/addTodo.js
export function reduce(model, todoList, todoText) {
  // todoList => 'work'
  // todoText => 'document dekupage'
}

function render({ actions }) {
  let { addTodo } = actions;
  return <button onClick={() => addTodo('work', 'document dekupage')}>...</button>;
}
```

If you're using webpack you can use the `loadActions` helper to automatically
load all of the actions within a directory. The action name will be the name
of the file (eg `addTodo`) and the action type will be the snake-cased version
of the file (eg `ADD_TODO`).

```js
// actions/index.js
import { loadActions } from 'dekupage';
export default loadActions(require.context('.'));
```

## State / models

State is managed through "models" and must be an object.

```
// model/index.js
export default { todos: [] };
```

### Overriding initial application state

To allow the initial application state to be overridden define an `init` action
and pass `initialState` to the app component:

```js
// actions/init.js
export function reduce(model, initialState) {
  // how you initialize the model is up to you
  // return {...initialState};
  // return {...model, ...initialState};
}

// index.js
ReactDOM.render(
  <div className='app-container'>
    <TodoApp initialState={...} />
  </div>
)
```

## TODO

### Decide on inline style handling

Look into aphrodite: https://github.com/Khan/aphrodite

### Decide on immutable state update handling

Look into zaphod: http://zaphod.surge.sh/

### Decide on local state handling

Do we want to store component state with the component or in the global state tree?

https://circleci.com/blog/local-state-global-concerns/

### Handle prop translations at jsx level

Can use `@jsx` directive to handle the prop transformations _before_ handing them off
to react (to avoid all the react warnings).

```
/* @jsx createElement */
import marked from 'marked';
import { createElement, createComponent } from 'dekupage';

function render({ props }) {
  let { src } = props;
  return <div class='markdown' innerHTML={marked(src)} />;
}

export default createComponent({ render });
```

### Figure out way to hide DekupageComponent from devtools tree

May be some tips in https://www.youtube.com/watch?v=zD_judE-bXk
