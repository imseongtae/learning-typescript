/**
 * 타입 별칭은 자바스크립트가 아닙니다.
 * @module 3-5-1-타입 별칭은 자바스크립트가 아닙니다-Example
 */

/**
 * @summary 타입 별칭은 타입시스템에만 존재하는 개념
 * @description 타입 별칭은 타입시스템에만 존재하는 개념이므로, 런타임 코드에서는 참조할 수 없다. 타입스크립트는 런타임에 존재하지 않는 항목에 접근하려고 하면 타입 오류로 알려준다.
 */
type someType = string | undefined;

console.log(someType); // Error
// Error: 'someType' only refers to a type, but is being used as a value here.ts(2693)
