/**
 * 선택적 매개변수
 * @module 5-1-2-Example
 */

function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}`);

  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}

announceSong('Greensleeves'); // Ok
announceSong('Greensleeves', undefined); // Ok
announceSong('Chandelier', 'Sia'); // Ok
