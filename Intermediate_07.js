// 7. Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.

function getBookTitle(bookId) {
  return books.find((book) => {
    return book.id === bookId;
  }).title;
}

console.log("Book title with id of 3: ", getBookTitle(3));

// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.

function getOldBooks() {
  return books.filter((book) => {
    return book.year < 1950;
  });
}

console.log("Get books older than 1950: ", getOldBooks());

// c) Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.

function addGenre() {
  return books.map((book) => {
    const amendedBook = { ...book };
    amendedBook.genre = "classic";
    return amendedBook;
  });
}

const alteredBooks = addGenre();
console.log("Altered books with new genre: ", alteredBooks);

// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.

function getTitles(authorInitial) {
  return books
    .filter((book) => {
      return book.author[0] === authorInitial.toUpperCase();
    })
    .map((book) => {
      return book.title;
    });
}

console.log("Books written by Authors starting with 'H': ", getTitles("h"));

// e) (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.

function latestBook() {
  let latestYear = 0;
  books.forEach((book) => {
    latestYear = latestYear < book.year ? book.year : latestYear;
  });

  return books.find((book) => {
    return book.year === latestYear;
  });
}

console.time("Execution time using forEach and find");
console.log("Latest book, using forEach and find: ", latestBook());
console.timeEnd("Execution time using forEach and find");

//I've also done it using a for loop as below. I like how clean this one looks. Bit faster too by the looks

function latestBookForLoop() {
  return books.find((book) => {
    for (let b of books) {
      if (book.year < b.year) {
        return false;
      }
    }
    return true;
  });
}

console.time("Execution time using find and for loop");
console.log("Latest book, using find and a for loop: ", latestBookForLoop());
console.timeEnd("Execution time using find and for loop");
