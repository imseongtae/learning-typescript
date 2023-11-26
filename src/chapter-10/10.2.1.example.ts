/**
 * 유추된 제네릭 인터페이스 타입
 * @module 10-2-1-Example
 */

interface LinkedNode<Value> {
  next?: LinkedNode<Value>;
  value: Value;
}

function getLast<Value>(node: LinkedNode<Value>): Value {
  return node.next ? getLast(node.next) : node.value;
}

// Inferred Value type argument: Date
const lastDate = getLast({
  value: new Date('09-13-1993'),
});

// Inferred Value type argument: string
const lastFruit = getLast({
  next: {
    value: 'banana',
  },
  value: 'apple',
});

// Inferred Value type argument: number
const lastMismatch = getLast({
  next: {
    value: 123,
  },
  value: false,
  //  ~~~~~
  // Error: type 'boolean' is not assignable to type 'number'.
});
