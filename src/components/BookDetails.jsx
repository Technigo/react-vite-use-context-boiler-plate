import { useContext } from "react";
import BookContext from "../contexts/BookContext";

export const BookDetails = () => {
  const book = useContext(BookContext);
  return (
    <>
      <div>
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <p>Published Year: {book.year}</p>
      </div>
    </>
  );
};
