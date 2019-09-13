/**
 * ### `get(mb, [test]) => v|undefined`
 * If passing the enclosed value *v* of *mb* to *test* returns `true`, **get** 
 * returns *v*. If *test* returns `false`, **get** returns `undefined`. If a 
 * test function is not supplied, the default test returns `true` for any 
 * value that is not `undefined` or `null`.
 */
export default (
  mb, 
  test = (x) => (x !== undefined && x !== null),
) => mb((v) => (
  test(v) ? v : undefined
));
