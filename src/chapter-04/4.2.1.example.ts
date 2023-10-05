/**
 * 타입 별칭 결합
 * @module 4-2-1-사용 검사-Example
 */

type FistAndLastNames = {
  firstName: string;
  lastName: string;
};

const hasBoth: FistAndLastNames = {
  firstName: 'Lucille',
  lastName: 'Clifton',
};

const hasOnlyOne: FistAndLastNames = {
  // Property 'lastName' is missing in type '{ firstName: string; }'
  // but required in type 'FistAndLastNames'.ts(2741)
  firstName: 'Lucille',
};

console.log('hasBoth:', hasBoth);
console.log('hasOnlyOne:', hasOnlyOne);
