/**
 * 2.3 타입 애너테이션
 * @module 2-3-0-타입 애너테이션-Example
 */

/**
 * @description 진화하는 any, 변수가 string 타입에서 number 타입으로 변한 것이 처음부터 의도된 것인지 일찍이 알 수 없다.
 */
let rocker;

rocker = 'Joan Jett'; // 타입: string
rocker.toUpperCase(); // OK

rocker = 19.58; // 타입: number
rocker.toPrecision(1);  // OK

// rocker.toUpperCase();

// Error: Property 'toUpperCase' does not exist on type 'number'.ts(2339) 
