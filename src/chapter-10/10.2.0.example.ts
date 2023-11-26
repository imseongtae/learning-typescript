/**
 * 제네릭 인터페이스
 * @module 10-2-0-Example
 */

interface Box<T> {
  inside: T;
}

const stringyBox: Box<string> = {
  inside: 'abc',
};

const numberBox: Box<number> = {
  inside: 123,
};

const incorrectBox: Box<number> = {
  inside: false,
  // Error: Type 'boolean' is not assignable to type 'number'.
};
