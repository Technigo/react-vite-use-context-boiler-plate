import { createContext, useState, useContext } from "react";

// Import the createContext hook from react and store it inside a variable
const AppDataContext = createContext();

// Declare the Data
export const AppDataProvider = ({ children }) => {
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

  return (
    <AppDataContext.Provider
      value={{ count, name, addOne, handleNameUpdate, appContent }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
