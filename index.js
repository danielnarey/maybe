export default {
  of: (v) => (o) => o(v),
  withDefault: (m, d) => m((v) => v ? v : d),
  toPromise: (m, e) => new Promise((res, rej) => v ? res(v) : rej(e)),
};