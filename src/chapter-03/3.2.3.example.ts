/**
 * 검사를 통한 내로잉
 * @module 3-2-2-typeof 검사를 통한 내로잉-Example
 */

/**
 * @summary typeof 검사를 통한 내로잉
 * @description typeof 연산자를 통해 변수의 타입을 좁힐 수 있다.
 * @type number | string
 */
let researcher = Math.random() * 0.5
  ? 'Rosalind Franklin'
  : 51;

if (typeof researcher === 'string') {
  researcher.toUpperCase(); // OK: string
}
  
if (!(typeof researcher === 'string')) {
  researcher.toFixed(); // OK: number
} else {
  researcher.toUpperCase(); // OK: string
}

typeof researcher === 'string'
  ? researcher.toUpperCase() // OK: string
  : researcher.toFixed(); // OK: number 

