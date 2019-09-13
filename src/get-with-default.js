/**
 * ### `getWithDefault(mb, d, [test]) => v|d`
 * If passing the enclosed value *v* of *mb* to *test* returns `true`, 
 * **getAsDefault** returns *v*. If *test* returns `false`, **getAsDefault** 
 * returns *d*. If a test function is not supplied, the default test returns
 * `true` for any value that is not `undefined` or `null`.
 */
export default (
  mb,
  d,
  test = (x) => (x !== undefined && x !== null),
) => mb((v) => (
  test(v) ? v : d
));
