/**
 * 다중 함수 타입 매개변수
 * @module 10-1-2-Example
 */

function makeTuple<First, Second>(first: First, second: Second) {
  return [first, second] as const;
}

const tuple = makeTuple(true, 'abc'); // Type of value: readonly [boolean, string]

// ==============================
function makePair<Key, Value>(key: Key, value: Value) {
  return { key, value };
}

// Ok: neither type argument provided
makePair('abc', 123); // Type: { key: string; value: number }

// Ok: both type arguments provided
makePair<string, number>('abc', 123); // Type: { key: string; value: number }
makePair<'abc', 123>('abc', 123); // Type: { key: "abc"; value: 123 }

makePair<string>('abc', 123);
//       ~~~~~~
// Error: Expected 2 type arguments, but got 1.
