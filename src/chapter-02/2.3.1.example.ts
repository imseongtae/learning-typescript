/**
 * 2.3.1 불필요한 타입 애너테이션
 * @module 2-3-1-불필요한 타입 애너테이션-Example
 */

/**
 * @description 타입 애너테이션 중복, 초깃값이 있는 변수에 타입 애너테이션을 추가하면 변수에 할당된 값의 타입이 일치하는지 확인한다.
*/
let firstName: string = "Tina"; // 타입 시스템은 변경되지 않음


/**
 * @description 타입스크립트가 호환되지 않는 사례, 아무것도 변하지 않는 변수에 타입애너테이션을 추가하지 않는 것을 저자는 선호
*/
let lastName: string = 42;
// Type '42' is not assignable to type 'string'.ts(2322)

