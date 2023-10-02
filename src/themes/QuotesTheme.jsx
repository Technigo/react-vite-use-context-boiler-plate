import { createContext, useState, useContext, useEffect } from "react";

// Import the createContext hook from react and store it inside a variable
const QuotesContext = createContext();

// Declare the Data
export const QuotesProvider = ({ children }) => {
  // Using the useState hook to manage state for user data
  const [quotes, setQuotes] = useState([]);
  // Dynamic content Data
  const fetchQuotes = () => {
    useEffect(() => {
      fetch("https://dummyjson.com/quotes")
        .then((response) => response.json())
        .then((data) => setQuotes(data))
        .catch((error) => console.error("Error fetching quotes:", error));
    }, []);
  };

  fetchQuotes();

  return (
    <QuotesContext.Provider value={{ quotes }}>
      {children}
    </QuotesContext.Provider>
  );
};

export const useQuotes = () => useContext(QuotesContext);
