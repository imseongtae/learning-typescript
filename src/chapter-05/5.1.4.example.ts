/**
 * 나머지 매개변수
 * @module 5-1-4-Example
 */

function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song}, by ${singer}`);
  }
}

singAllTheSongs('Alicia Keys'); // Ok
singAllTheSongs('Lady Gaga', 'Bad Romance', 'Just Dance', 'Poker Face'); // Ok

singAllTheSongs('Ella Fitzgerald', 2000);
//                                 ~~~~
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.
