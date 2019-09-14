/* ### `of(v) => (?v)`
 * Create a **maybe** of something: perhaps a resolvable value, or perhaps a 
 * reference or function result that is `undefined`, `null`, an inappropriate
 * type, or out of bounds. Returns a functional interface to the enclosed value 
 * (denoted as `(?v)`).
*/
export default (v) => (f) => f(v);
