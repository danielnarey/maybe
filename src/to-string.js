const stringify = (s) => {
  if (typeof(s) === 'string') {
    return `"${s}"`;
  };
  
  if (Array.isArray(s)) {
    return `[${s}]` 
  };
  
  return `${s}`;
};


/**
 * ### `toString(mb) => '(?v)'
 * Returns a string representing the contents of a **maybe**.
 */
export default (mb) => mb((v) => `(?${stringify(v)})`);
