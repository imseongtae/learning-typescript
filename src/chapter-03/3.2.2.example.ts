/**
 * 조건 검사를 통한 내로잉
 * @module 3-2-2-조건 검사를 통한 내로잉-Example
 */

/**
 * @summary 조건 검사를 통한 내로잉
 * @type number | string
 */
let scientist = Math.random() * 0.5
  ? 'Rosalind Franklin'
  : 51;

if (scientist === 'Rosalind Franklin') {
  scientist.toUpperCase(); // OK
}
  
// scientist.toUpperCase(); // Error
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
