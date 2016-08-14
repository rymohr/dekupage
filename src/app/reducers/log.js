export default function log(state = '', action) {
  console.log('DISPATCH', action);
  return state;
}
