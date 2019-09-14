/**
 * ### `withDefault(mb, d, [test]) => v|d`
 * Attempt to resolve a **maybe**, substituting a default when the enclosed 
 * values is missing or invalid. If passing the enclosed value *v* of *mb* 
 * to *test* returns `true`, **withDefault** returns *v*. If *test* returns 
 * `false`, **withDefault** returns *d*. If a test function is not supplied, 
 * the default test returns `true` for any value that is not `undefined` or 
 * `null`.
 */
export default (
  mb,
  d,
  test = (x) => (x !== undefined && x !== null),
) => mb((v) => (
  test(v) ? v : d
));
