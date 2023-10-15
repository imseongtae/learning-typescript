/**
 * any 다시 보기
 * @module 9-1-1-Example
 */

let anyValue: any;

anyValue = 'Lucille Ball'; // OK
anyValue = 123; // OK

console.log('anyValue:', anyValue); // OK

/**
 * any는 타입 검사를 수행하지 않도록 명시적으로 지시함
 * 어떤 값이든 될 수 있음을 나타내려면 unknown 타입이 훨씬 안전함
 * @description
 * @param name
 */
function greetComedian(name: any) {
  // 타입 오류 없음
  console.log(`Announcing ${name.toUpperCase()}`);
}

// greetComedian('Lucille Ball'); // OK
greetComedian({ name: 'Bea Arthur' }); // Runtime error: name.toUpperCase is not a function
