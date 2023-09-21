/**
 * 2.2 할당 가능성
 * @module 2-2-0-할당 가능성-Example
 */

/**
 * 2.2.0 예제
 * @description 동일한 타입의 다른 값이 할당될 때는 문제가 되지 않는다. fisstName = 'Carole' -> 'John'
 * @type string
 */
let firstName = 'Carole';
firstName = 'John';


/**
 * 2.2.0 예제
 * @description 변수에 다른 타입의 값이 할당되면 오류가 발생한다. lastName = 'King' -> true
 */
let lastName = 'King'; 
// lastName = true;

// Error: Type 'boolean' is not assignable to type 'string'.ts(2322)
