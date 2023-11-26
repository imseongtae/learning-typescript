/**
 * 제네릭
 * @module 10-1-1-Example
 */

function identity<T>(input: T) {
  return input;
}

const numeric = identity<number>(123); // Type: 123
const stringy = identity<string>("Hello!"); // Type: 'Hello!'

console.log("# numeric:", numeric);
console.log("# stringy:", stringy);
