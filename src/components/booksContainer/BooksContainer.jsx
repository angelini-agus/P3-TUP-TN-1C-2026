import BookItem from "../bookItem/BookItem";

const BooksContainer = ({ books }) => {
  const booksMapped = books.map((book) => {
    return (
      <BookItem
        key={book.id}
        title={book.title}
        imageUrl={book.imageUrl}
        author={book.author}
        pageCount={book.pageCount}
        rating={book.rating}
        available={book.available}
      />
    );
  });

  return (
    <div className="d-flex justify-content-center flex-wrap mt-5">{booksMapped}</div>
  );
};

export default BooksContainer;
