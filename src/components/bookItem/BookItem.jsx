const BookItem = ({ title, author, pageCount, rating, available }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>
        {pageCount} página{pageCount > 1 ? "s" : ""}
      </p>
      <p>
        {rating} estrella{rating > 1 ? "s" : ""}
      </p>
      <p>{available ? "Disponible" : "No disponible"}</p>
    </>
  );
};

export default BookItem;
