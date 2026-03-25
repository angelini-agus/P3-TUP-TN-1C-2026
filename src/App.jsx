import BookItem from "./components/bookItem/BookItem";
import { BOOKS } from "./data/books";

const App = () => {
  const booksMapped = BOOKS.map((book) => {
    return (
      <BookItem
        key={book.id}
        title={book.title}
        author={book.author}
        pageCount={book.pageCount}
        rating={book.rating}
        available={book.available}
      />
    );
  });

  return (
    <>
      <h1>¡Bienvenidos a book champions!</h1>
      <p>Buenaaas</p>
      {booksMapped}
    </>
  );
};

export default App;
