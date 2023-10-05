/**
 * 타입 별칭 결합
 * @module 4-1-2-별칭 객체 타입-Example
 */

type Poet = {
  born: number;
  name: string;
};

let poetLater: Poet;

poetLater = {
  born: 1935,
  name: 'Mary Oliver',
};
