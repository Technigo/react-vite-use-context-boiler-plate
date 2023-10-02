import { useBook } from "../themes/BookTheme";

export const BookDetails = () => {
  const { bookData } = useBook();
  return (
    <>
      <div>
        <h1>{bookData.title}</h1>
        <p>Author: {bookData.author}</p>
        <p>Published Year: {bookData.year}</p>
      </div>
    </>
  );
};
