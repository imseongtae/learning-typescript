/**
 * 타입의 종류
 * @module 2-1-0-타입의 종류-Example
 */

/**
 * @description 초깃값이 'Aretha'인 변수를 생성하는 경우, ts는 문자열 타입을 유추할 수 있다.
 * @type string
 */
let singer = 'Aretha';
let singer2 = 'Ella Fitzgerald';

/**
 * @description TypeScript는 계산된 초기값을 갖는 변수의 타입을 유추할 수 있을만큼 충분히 똑똑하다.
 * @type string
 */
let bestSong = Math.random()  > 0.5
  ? 'Chain of Fools'
  : 'Respect';

