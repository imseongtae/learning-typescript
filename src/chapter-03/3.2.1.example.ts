/**
 * 값 할당을 통한 내로잉
 * @module 3-2-1-값 할당을 통한 내로잉-Example
 */

/**
 * @summary 타입을 좁히는데 사용할 수 있는 논리적 검사를 타입 가드라고 한다.
 * @description 변수에 유니온 타입 애너테이션이 명시되고, 초깃값이 주어질 때 값 할당 내로잉이 작동한다.
 * @type number | string
 */
let admiral: number | string;

admiral = 'Grace Hopper';

admiral.toUpperCase(); // OK

// admiral.toFixed(); // Error
// Error: Property 'toFixed' does not exist on type 'string'.
