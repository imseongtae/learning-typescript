// 03-example - Type vs Interface

interface Poet {
  /** 태어난 해 */
  born: number;
  /** 이름 */
  name: string;
}

// type Poet = {
//   /** 태어난 해 */
//   born: number;
//   /** 이름 */
//   name: string;
// };

let valueLater: Poet;

valueLater = {
  born: 1935,
  name: 'Sarah',
};

valueLater = 'Emily Dickinson';
// Type 'string' is not assignable to type 'Poet'.ts(2322)

valueLater = {
  born: true,
  // ~~
  // Type 'boolean' is not assignable to type 'number'.ts(2322)
  name: 'Sarah',
};
