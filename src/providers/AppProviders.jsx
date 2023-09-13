// App providers
// Importing necessary contexts and hooks
import { useState, useEffect } from "react";
import { BookContext } from "../contexts/BookContext";
import { BoilerPlateContext } from "../contexts/BoilerPlateContext";

// Defining a functional component named 'AppProviders'
export const AppProviders = ({ children }) => {
  // Static data for a book
  const bookData = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  };

  // Using the useState hook to manage state for user data
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Diego Zito");
  const [quotes, setQuotes] = useState([]);

  // Function to increment the count by 1
  const addOne = () => setCount((count) => count + 1);

  // Function to update the name based on user input
  const handleNameUpdate = () => {
    const newName = prompt("Enter a new name:");
    if (newName) {
      setName(newName);
    }
  };

  // Static content data
  const appContent = {
    heading: "State Managament - UseContext Hook Technigo Boilerplate",
    reactivedataExampleOne:
      "Here is an example on how a simple reactHook works using a counter fetched from a store",
    reactivedataExampleTwo:
      "Here is an example on how a simple reactHook works using a button to change the name on screen fetched from a store",
    reactivedataExampleThree:
      "Before you decide to delete all components and start from scratch, we suggest examining them closely to grasp their structure. They can act as a blueprint for your future work.",
    componentInfo:
      " Here is some component examples fetchcing dynamic and static data from a centralized store called 'App Providers':",
  };

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

  // Rendering the component's JSX
  return (
    // Providing the bookData to all child components using the BookContext
    <BookContext.Provider value={bookData}>
      {/* // Providing user data and functions to all child components using the
      BoilerPlateContext */}
      <BoilerPlateContext.Provider
        value={{ count, name, addOne, handleNameUpdate, appContent, quotes }}
      >
        {/* // Rendering any child components passed to AppProviders */}
        {children}
      </BoilerPlateContext.Provider>
    </BookContext.Provider>
  );
};
