// 01-example - TSDoc
// 인라인 주석과 JSDoc 주석의 차이
// 타입 정의에 TSDoc 주석을 사용하여 인라인 주석보다 더 많은 정보를 제공

// 도서를 생성합니다.
function createBook(title: string, author: string, genre: string): Book {
  return { title, author, genre };
}

/**
 * 도서를 생성합니다.
 */
function createBookForJSDoc(title: string, author: string, genre: string): Book {
  return { title, author, genre };
}

createBook('헨리 6세', '윌리엄 셰익스피어', '역사'); // 인라인 주석과 JSDoc 주석의 차이
createBookForJSDoc('헨리 6세', '윌리엄 셰익스피어', '역사');

const book: Book = {
  title: '헨리 6세',
  author: '윌리엄 셰익스피어',
  genre: '역사',
};

/**
 * 도서 정보에 대한 타입 정의
 */
interface Book {
  /** 책의 제목 정보 */
  title: string;
  /** 책의 저자 정보 */
  author: string;
  /** 책의 장르 정보 */
  genre: string;
}

// IT 도서 정보에 대한 타입 정의
interface ITBook {
  title: string;
  author: string;
  genre: string;
}

console.log('# book:', book);
