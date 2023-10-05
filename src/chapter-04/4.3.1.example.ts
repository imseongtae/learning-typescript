/**
 * 유추된 객체 타입 유니온
 * @module 4-3-1-Example
 */

const poem =
  Math.random() > 0.5 ? { name: 'The Double Image', pages: 7 } : { name: 'Her Kind', rhymes: true };
// Type:
// {
//   name: string;
//   pages: number;
//   rhymes?: undefined;
// }
// |
// {
//   name: string;
//   pages?: undefined;
//   rhymes: boolean;
// }

poem.name; // string
poem.pages; // number | undefined
poem.rhymes; // boolean | undefined
