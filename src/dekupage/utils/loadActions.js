// This is a helper for loading actions
// loadActions(require.context('./path/to/actions'))
import constantCase from 'constant-case';
import createActions from '../actions';

// context = require.context(dir, true)
export default function loadActions(req) {
  let actions = {};

  req.keys().forEach((key) => {
    if (/index\.js$/.test(key)) return;
    if (!/\.js$/.test(key)) return;

    let actionName = key.match(/(\w+)[.]js/)[1];
    let actionType = constantCase(actionName);

    actions[actionType] = req(key);
  })

  return createActions(actions);
}
