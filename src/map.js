/**
 * ### `map(mb, f, [test]) => (?f(v)|nothing)`
 * Attempt to apply a function to a **maybe**. If passing the enclosed value
 * *v* of *mb* to *test* returns `true`, **map** applies *f* to *v* and
 * returns the result as a new **maybe**. If *test* returns `false`, **map**
 * returns a **maybe** that encloses nothing. If a test function is not
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
});
