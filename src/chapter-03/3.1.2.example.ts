/**
 * 유니언 속성
 * @module 3-1-2-유니언 속성-Example
 */

/**
 * @summary 유니언으로 선언한 타입의 멤버에만 접근할 수 있다.
 * @description 객체가 어떤 속성을 포함한 타입으로 확실하게 알려지지 않은 경우, 타입스크립트는 해당 속성을 사용하려고 시도하는 것이 안전하지 않다고 여긴다.
 * @type string | number
 */
let physicist = Math.random()  > 0.5
  ? 'Marie Curie'
  : 84;


physicist.toString(); // OK

// physicist.toUppperCase(); // Error
// Error: Property 'toUppperCase' does not exist on type 'string | number'.

if (typeof physicist === 'string') {
  physicist.toUpperCase(); // OK
}

// physicist.toFixed(); // Error
// Property 'toFixed' does not exist on type 'string | number'.

if (typeof physicist === 'number') {
  physicist.toFixed(); // OK
}
