/**
 * ### `toPromise(mb, [test, [err]]) => Promise<v|err>`
 * Convert a **maybe** to a `Promise`. If passing the enclosed value *v* of 
 * *mb* to *test* returns `true`, **toPromise** returns a promise that 
 * resolves to *v*. If *test* returns `false`, **toPromise** returns a promise 
 * that rejects with *err*. If a test function is not supplied, the default 
 * test returns `true` for any value that is not `undefined` or `null`.
 */
export default (
  mb,
  test = (x) => (x !== undefined && x !== null),
  err = new Error('Maybe not resolved: fvalue is missing or invalid'),
) => mb((v) => (
  test(v) ? Promise.resolve(v) : Promise.reject(err);
));
