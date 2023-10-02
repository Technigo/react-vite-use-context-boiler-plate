import { createContext, useState, useContext } from "react";

// Creating a new context for app data and storing it in the AppDataContext variable
const AppDataContext = createContext();

// Defining a context provider component named 'AppDataProvider'
export const AppDataProvider = ({ children }) => {
  // Using the useState hook to initialize and manage the 'count', 'name', and 'quotes' states
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Diego Zito");
  const [quotes, setQuotes] = useState([]);

  // Defining a function to increment the 'count' state by 1
  const addOne = () => setCount((count) => count + 1);

  // Defining a function to update the 'name' state based on user input
  const handleNameUpdate = () => {
    const newName = prompt("Enter a new name:");
    if (newName) {
      setName(newName);
    }
  };

  // Defining static content data for the app
  const appContent = {
    heading: "State Managament - UseContext Hook Technigo Boilerplate",
    reactivedataExampleOne:
      "Here is an example on how a simple reactHook works using a counter fetched from a store",
    reactivedataExampleTwo:
      "Here is an example on how a simple reactHook works using a button to change the name on screen fetched from a store",
    reactivedataExampleThree:
      "Before you decide to delete all components and start from scratch, we suggest examining them closely to grasp their structure. They can act as a blueprint for your future work.",
    componentInfo:
      " Here is some component examples fetching dynamic and static data from a centralized store called 'App Providers':",
  };

  // Returning the provider component to make the app data available to child components
  return (
    <AppDataContext.Provider
      value={{ count, name, addOne, handleNameUpdate, appContent }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

// Defining a custom hook named 'useAppData' to provide an easier way to access the AppDataContext
export const useAppData = () => useContext(AppDataContext);
