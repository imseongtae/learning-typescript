/**
 * 참 검사를 통한 내로잉
 * @module 3-4-2-참 검사를 통한 내로잉-Example
 */

/**
 * @summary truthy로 확인된 값에 한해서 변수의 타입을 좁힐 수 있다
 * @description 
 * @type string | undefined
 */
let geneticist = Math.random() * 0.5 
  ? 'Barbara McClintock'
  : undefined;

// geneticist.toUpperCase(); // Error
// Error: Object is possibly 'undefined'.

// if 문의 코드 블록에서는 geneticist가 truthy로 확인되었으므로, geneticist의 타입은 string이다.
if (geneticist) {
  geneticist.toUpperCase(); // OK: string
}

// 참 여부를 검사하는 일을 잘 수행하지만 그 외에 다른 기능은 제공하지 않는다. 
// string | undefined 타입의 값이 falsy라면 그것이 빈문자열인지, undefined인지 알 수 없다.
geneticist && geneticist.toUpperCase(); // OK: string | undefined
geneticist?.toUpperCase(); // OK: string | undefined

let biologist = Math.random() > 0.5 && 'Rachel Carson';

if (biologist) {
  biologist; // OK: string
} else {
  biologist; // string | false
}
