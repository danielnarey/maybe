/**
 * ### `map(mb, f, [test]) => (?f(v))`
 * If passing the enclosed value *v* of *mb* to *test* returns `true`, apply 
 * *f* to *v* and return the result as a new **maybe**. If *test* returns 
 * `false`, return a **maybe** with no value. If a test function is not 
 * supplied, the default test returns `true` for any value that is not 
 * `undefined` or `null`.
 */
export default (
  mb, 
  f,
  test = (x) => (x !== undefined && x !== null),
) => mb((v) => {
  const result = test(v) ? f(v) : undefined;
  
  return (g) => g(result);
};
