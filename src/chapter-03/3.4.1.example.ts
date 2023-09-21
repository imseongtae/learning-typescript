/**
 * 십억 달러의 실수
 * @module 3-4-1-십억 달러의 실수-Example
 */

/**
 * @summary 다른 타입이 필요한 위치에 null 값을 사용하도록 허용하는 많은 타입 시스템을 가리키는 업계 용어
 * @description 변수를 const로 선언하고 ts는 직접 리터럴 값을 할당하면, 해당변수를 할당된 리터럴 값으로 유추한다.
 * @type 'Hypatia'
 */
let firstName = null;



/**
 * @summary strictNullChecks 가 활성화 되면 ts는 잠재적인 충돌을 확인한다. - strictNullChecks ? Error : OK
 * @description strictNullChecks 옵션을 false로 설정하면 아래 코드의 타입은 완벽히 안전하다고 간주되지만, 이것은 틀린 것이다. toLocaleLowerCase에 접근할 때 undefined가 되는 것은 잘못된 것이다.
 * @type 'Tony Hoare' | undefined
 */
let nameMaybe = Math.random() * 0.5
  ? 'Tony Hoare'
  : undefined;

nameMaybe.toLocaleLowerCase(); // strictNullChecks ? Error : OK
// Error: 'nameMaybe' is possibly 'undefined'.ts(18048)
