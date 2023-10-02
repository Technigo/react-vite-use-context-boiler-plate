import { createContext, useContext } from "react";

// Creating a new context for books and storing it in the BookContext variable
const BookContext = createContext();

// Defining a context provider component named 'BookProvider'
export const BookProvider = ({ children }) => {
  // Defining static data for a book
  const bookData = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  };

  // Returning the provider component to make the 'bookData' available to child components
  return (
    <BookContext.Provider value={{ bookData }}>{children}</BookContext.Provider>
  );
};

// Defining a custom hook named 'useBook' to provide an easier way to access the BookContext
export const useBook = () => useContext(BookContext);
