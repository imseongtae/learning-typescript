/**
 * 명시적 제네릭 호출 타입
 * @module 10-1-1-Example
 */

function logWrapper<Input>(callback: (input: Input) => void) {
  return (input: Input) => {
    console.log('Input:', input);
    callback(input);
  };
}

// Type: (input: string) => void
logWrapper((input: string) => {
  console.log(input.length);
});

// Type: (input: unknown) => void
logWrapper(input => {
  console.log(input.length);
  //                ~~~~~~
  // Error: Property 'length' does not exist on type 'unknown'.
});
