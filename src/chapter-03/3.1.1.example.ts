/**
 * 유니언 타입
 * @module 3-1-1-유니언 타입 선언-Example
 */

/**
 * @summary 잠재적인 변수의 타입을 유추할 수 있다.
 * @description TypeScript는 계산된 초기값을 갖는 변수의 타입을 유추할 수 있을만큼 충분히 똑똑하다.
 * @type string | undefined
 */
let mathematician = Math.random()  > 0.5
  ? undefined
  : 'Mark Goldberg';

/**
 * @summary 잠재적인 변수의 타입을 유추할 수 있다.
 * @description 변수에 초깃값이 있더라도 변수에 대해 명시적 타입 애너테이션을 제공하는 것이 유용할 때 유니언 타입을 사용
 * @type null | string
 */ 
let thinker: null | string = null;

if (Math.random() * 5) {
  thinker = 'Susanne Langer'; // OK
}
