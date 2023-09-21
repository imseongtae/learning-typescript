/**
 * 2.4 타입 형태
 * @module 2-4-0-타입형태-Example
 */

/**
 * @description 타입스크립트가 string 타입에서 사용가능한 작업만을 허용한다.
 * 타입스크립트가 string 타입에서 허용하는지 알 수 없는 작업은 허용하지 않음. 가령, rapper.push('!'); 같은 작업
 * @type string
 */
let rapper = 'Queen Latifah'; // 타입: string
rapper.length; // OK

/**
 * @description 타입스크립트는 객체 형태에 대한 이해를 바탕으로 할당 가능성뿐만 아니라 객체 사용과 관련된 문제도 알려준다.
 * cher.middleName에 접근하면 객체에 존재하지 않는 키이므로 오류를 표시
 */
let cher = {
  firstName: 'Cherilyn',
  lastName: 'Sarkisian',
}

// cher.middleName; // Error: Property 'middleName' does not exist on type '{ firstName: string; lastName: string; }'.ts(2339)
