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
