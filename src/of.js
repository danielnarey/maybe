/* ### `of(v) => (?v)`
 * Construct a **maybe** from some value, which might be a reference or
 * function result that is `undefined`, `null`, or otherwise invalid. Returns a
 * functional interface to the enclosed value (denoted as `(?v)`).
*/
export default (v) => (f) => f(v);
