/**
 * 스프레드
 * @module 6-3-1-Example
 */

// Type: string[]
const soldiers = ['Harriet Tubman', 'Joan of Arc', 'Khutulun'];

// Type: number[]
const soldierAges = [90, 19, 45];

// Type: (string | number)[]
const conjoined = [...soldiers, ...soldierAges];
