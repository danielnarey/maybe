const stringify = (s) => (Array.isArray(s) ? `[${s}]` : `${s}`);


/**
 * ### `toString(mb) => '(v)' | '(undefined)'
 * Returns a string representing the contents of a **maybe**.
 */
export default (mb) => mb((v) => `(${stringify(a)} . ${stringify(b)})`);
