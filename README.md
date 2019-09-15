# @danielnarey/maybe [![Build Status](https://travis-ci.com/danielnarey/maybe.svg?branch=master)](https://travis-ci.com/danielnarey/maybe) [![npm (scoped)](https://img.shields.io/npm/v/@danielnarey/maybe)](https://www.npmjs.com/package/@danielnarey/maybe) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@danielnarey/maybe)

**A tiny functional data structure for values that might not exist**

When you have a reference or function result that might not resolve to a value of the expected type or range, using a **maybe** simplifies error handling, helping to ensure predictable behavior from your application.


## Examples

```js
import maybe from '@danielnarey/maybe';
// OR: const maybe = require('@danielnarey/maybe');

// constructor
const mb = maybe.of('🤷‍♂️');
typeof(mb); //--> 'function'

// accessors
maybe.withDefault(mb, '🙈'); //--> '🤷‍♂️'
maybe.withDefault(maybe.nothing(), '🙈'); //--> '🙈'

// conversion
maybe.toPromise(mb).then(console.log); //--> '🤷‍♂️'
maybe.toPromise(maybe.nothing()).catch(() => console.log('🙈')); //--> '🙈'

// functional transforms
const mb2 = maybe.map(mb, (s) => `🧜‍♀️${s}`);

// immutability
maybe.toString(mb); //--> '(?"🤷‍♂️")'
maybe.toString(mb2); //--> '(?"🧜‍♀️🤷‍♂️")'

```


## API

### `of(v) => (?v)`
Create a **maybe** of something: perhaps a resolvable value, or perhaps a 
reference or function result that is `undefined`, `null`, an inappropriate
type, or out of bounds. Returns a functional interface to the enclosed value 
(denoted as `(?v)`).


### `nothing() => (?nothing)`
Returns a **maybe** that encloses nothing.


### `map(mb, f, [test]) => (?f(v)|nothing)`
Attempt to apply a function to a **maybe**. If passing the enclosed value
*v* of *mb* to *test* returns `true`, **map** applies *f* to *v* and
returns the result as a new **maybe**. If *test* returns `false`, **map**
returns a **maybe** that encloses nothing. If a test function is not
supplied, the default test returns `true` for any value that is not
`undefined` or `null`.
 
 
### `withDefault(mb, d, [test]) => v|d`
Attempt to resolve a **maybe**, substituting a default when the enclosed
value is missing or invalid. If passing the enclosed value *v* of *mb*
to *test* returns `true`, **withDefault** returns *v*. If *test* returns
`false`, **withDefault** returns *d*. If a test function is not supplied,
the default test returns `true` for any value that is not `undefined` or
`null`.


### `toPromise(mb, [test, [err]]) => Promise<v|err>`
Convert a **maybe** to a `Promise`. If passing the enclosed value *v* of
*mb* to *test* returns `true`, **toPromise** returns a promise that
resolves to *v*. If *test* returns `false`, **toPromise** returns a promise
that rejects with *err*. If a test function is not supplied, the default
test returns `true` for any value that is not `undefined` or `null`.
 
 
### `fromPromise(p) => Promise<(?v|nothing)>`
Ensure that a promise won't reject by converting its awaited value to a
**maybe**. If *p* is a promise that resolves to *v*, awaiting
`fromPromise(p)` returns a **maybe** that encloses *v*. If *p* is a promise
that rejects, awaiting `fromPromise(p)` returns a **maybe** that encloses
nothing.
 
 
### `toString(mb) => '(?v)'`
Returns a string representing the contents of a **maybe**.


## Prior Art
- Haskell: [Data.Maybe](https://hackage.haskell.org/package/base-4.12.0.0/docs/Data-Maybe.html)
- Elm/core: [Maybe](https://package.elm-lang.org/packages/elm/core/latest/Maybe)