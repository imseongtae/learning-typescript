/**
 * 명시적 제네릭 클래스 타입
 * @module 10-3-1-Example
 */

class CurriedCallback<Input> {
  #callback: (input: Input) => void;

  constructor(callback: (input: Input) => void) {
    this.#callback = (input: Input) => {
      console.log('Input:', input);
      callback(input);
    };
  }

  call(input: Input) {
    this.#callback(input);
  }
}

// Type: CurriedCallback<string>
new CurriedCallback((input: string) => {
  console.log(input.length);
});

// Type: CurriedCallback<unknown>
new CurriedCallback(input => {
  console.log(input.length);
  //                ~~~~~~
  // Error: Property 'length' does not exist on type 'unknown'.
});
