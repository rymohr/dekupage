export function dispatch() {
  return (actions) => {
    setInterval(actions.increment, 1000);
  }
}
