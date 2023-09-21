/**
 * 유니언 타입
 * @module 3-1-0-유니언 타입-Example
 */

/**
 * @summary 잠재적인 변수의 타입을 유추할 수 있다.
 * @description TypeScript는 계산된 초기값을 갖는 변수의 타입을 유추할 수 있을만큼 충분히 똑똑하다.
 * @type string | undefined
 */
const mathematician = Math.random() > 0.5 ? undefined : 'Mark Goldberg';
