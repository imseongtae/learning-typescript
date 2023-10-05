/**
 * 타입 별칭 결합
 * @module 4-1-2-별칭 객체 타입-Example
 */

type WithFirstName = {
  firstName: string;
};

type WithLastName = {
  lastName: string;
};

const hasBoth = {
  firstName: 'Lucille',
  lastName: 'Clifton',
};

const withFirstName: WithFirstName = hasBoth;
const withLastName: WithLastName = hasBoth;

console.log('withFirstName:', withFirstName);
console.log('withLastName:', withLastName);
