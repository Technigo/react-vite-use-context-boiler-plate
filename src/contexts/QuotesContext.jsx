import { createContext, useState, useContext, useEffect } from "react";

// Import the createContext hook from react and store it inside a variable
const QuotesContext = createContext();

// Defining a context provider component named 'QuotesProvider'
export const QuotesProvider = ({ children }) => {
  // Using the useState hook to initialize and manage the 'quotes' state
  const [quotes, setQuotes] = useState([]);
  // Defining a function to fetch quotes from an external API
  const fetchQuotes = () => {
    // Using the useEffect hook to execute the fetching logic once the component mounts
    useEffect(() => {
      fetch("https://dummyjson.com/quotes")
        .then((response) => response.json())
        .then((data) => setQuotes(data))
        .catch((error) => console.error("Error fetching quotes:", error));
    }, []); // Empty dependency array ensures this useEffect runs only once when the component mounts
  };
  // Calling the fetchQuotes function to initiate the data fetching
  fetchQuotes();

  // Returning the provider component to make the 'quotes' state available to child components
  return (
    <QuotesContext.Provider value={{ quotes }}>
      {children}
    </QuotesContext.Provider>
  );
};

// Defining a custom hook named 'useQuotes' to provide an easier way to access the QuotesContext
export const useQuotes = () => useContext(QuotesContext);
