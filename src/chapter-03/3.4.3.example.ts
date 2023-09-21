/**
 * 초깃값이 없는 변수
 * @module 3-4-3-초깃값이 없는 변수-Example
 */

/**
 * @summary 타입스크립트는 값이 할당될 때까지 변수가 undefined임을 이해할만큼 충분히 영리하다
 * @description 
 * @type string | undefined
 */
let mathematician: string | undefined;

mathematician.length; // Error
// Error: Variable 'mathematician' is used before being assigned.ts(2454)

mathematician?.length; // OK

mathematician = 'Mark Goldberg'; // OK
mathematician.length; // OK
