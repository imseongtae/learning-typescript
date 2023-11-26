/**
 * 명시적 제네릭 클래스 타입
 * @module 10-3-1-Example
 */

const textEventually = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve('Hello, world!'), 1000);
});

const lengthEventually = textEventually.then(text => text.length);

console.log('# lengthEventually:', lengthEventually);
console.log('# typeof textEventually:', typeof textEventually);

// [ ] 제네릭을 어떻게 쓰면 좋을지?
// [ ] 이펙티브 타입스크립트의 내용 - 황금률,인터페스쪽
// [ ] 코드를 작성하며, 제네릭을 어떻게 쓰면 좋을지
// [ ] 제네릭을 학습하며, 추가적으로 느낀 점.
// [ ] 제네릭의 베스트 프랙티스, 어떻게 쓰면 좋을지 느낀점
// [ ] 실무에서 사용하는 제네릭의 사용사례
//   [ ] 본체를 바꾸지 않고, 계속 확장해서 사용하는 코드가 있음
