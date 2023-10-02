import { createContext, useContext } from "react";

// Import the createContext hook from react and store it inside a variable
const BookContext = createContext();

// Declare the Data
export const BookProvider = ({ children }) => {
  // Static data for a book
  const bookData = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  };

  return (
    <BookContext.Provider value={{ bookData }}>{children}</BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
