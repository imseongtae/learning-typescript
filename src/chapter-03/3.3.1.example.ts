/**
 * 리터럴 할당 가능성
 * @module 3-3-1-리터럴 할당 가능성-Example
 */

/**
 * @summary 리터럴 타입, 원시 타입 값 중 어떤 것이 아닌 특정 원싯값
 * @description 변수를 const로 선언하고 ts는 직접 리터럴 값을 할당하면, 해당변수를 할당된 리터럴 값으로 유추한다.
 * @type 'Hypatia'
 */
let specificallyAda: 'Ada';

specificallyAda = 'Ada';

specificallyAda = 'Byron'; // Error 
// Error: Type '"Byron"' is not assignable to type '"Ada"'.


let someString = '';

specificallyAda = someString; // Error
// Error: Type 'string' is not assignable to type '"Ada"'.ts(2322)

someString = ':)';
