import _of from './of';
import nothing from './nothing';


/* ### `fromPromise(p) => Promise<(?v)>`
 * Ensure that a promise won't reject by converting its awaited value to a
 * **maybe**. If *p* is a promise that resolves to *v*, awaiting
 * `fromPromise(p)` returns a **maybe** that encloses *v*. If *p* is a promise
 * that rejects, awaiting `fromPromise(p)` returns a **maybe** that encloses
 * nothing.
*/
export default async (p) => {
  try {
    const v = await p;

    return _of(v);
  } catch {
    return nothing();
  }
};
