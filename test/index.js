import test from 'ava';
import maybe from '../dist/index.cjs';


test('of', (t) => {
  t.is(maybe.toString(maybe.of(42)), '(?42)');
  t.is(maybe.toString(maybe.of('apple')), '(?"apple")');
  t.is(maybe.toString(maybe.of('')), '(?"")');
  t.is(maybe.toString(maybe.of(0)), '(?0)');
  t.is(maybe.toString(maybe.of(NaN)), '(?NaN)');
  t.is(maybe.toString(maybe.of(undefined)), '(?nothing)');
  t.is(maybe.toString(maybe.of(null)), '(?nothing)');
  t.is(maybe.toString(maybe.of()), '(?nothing)');
});


test('fromPromise', async (t) => {
  const resolve = () => maybe.fromPromise(Promise.resolve(42));
  const reject = () => maybe.fromPromise(Promise.reject(new Error('!')));
  
  t.is(maybe.toString(await resolve()), '(?42)');
  t.is(maybe.toString(await reject()), '(?nothing)');
});


test('map', (t) => {
  const mapped = maybe.map(maybe.of(42), (n) => n + 1);

  t.is(maybe.toString(mapped), '(?43)');
});


test('nothing', (t) => {
  t.is(maybe.toString(maybe.nothing()), '(?nothing)');
  t.is(maybe.toString(maybe.nothing(42)), '(?nothing)');
});


test('toPromise', async (t) => {
  const resolved = await maybe.toPromise(maybe.of(42));
  
  t.is(resolved, 42);
  
  const isNull = await t.throwsAsync(
    maybe.toPromise(maybe.of(null), undefined, new Error('!')),
  );
  
  t.is(isNull.message, '!');
  
  const failsTest = await t.throwsAsync(
    maybe.toPromise(maybe.of(42), (x) => (x < 10), new Error('!')),
  );
  
  t.is(failsTest.message, '!');
  
  const isNothing = await t.throwsAsync(
    maybe.toPromise(maybe.nothing(), undefined, new Error('!')),
  );
  
  t.is(isNothing.message, '!');
});


test('toString', (t) => {
  t.is(maybe.toString(maybe.of([])), '(?[])');
  t.is(maybe.toString(maybe.of([1])), '(?[1])');
  t.is(maybe.toString(maybe.of([1, 2])), '(?[1,2])');
  t.is(maybe.toString(maybe.of({})), '(?[object Object])');
  t.throws(() => maybe.toString());
});


test('withDefault', (t) => {
  t.is(maybe.withDefault(maybe.of(42), 0), 42);
  t.is(maybe.withDefault(maybe.of(42), 0, (x) => x < 10), 0);
  t.is(maybe.withDefault(maybe.of(null), 0), 0);
  t.is(maybe.withDefault(maybe.nothing(), 0), 0);
});
