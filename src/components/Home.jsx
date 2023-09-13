// Importing necessary hooks and context
import { useContext } from "react";
import { BoilerPlateContext } from "../contexts/BoilerPlateContext";

// Defining a functional component named 'Home'
export const Home = () => {
  // Using the 'useContext' hook to access the values provided by 'BoilerPlateContext'
  const { count, name, addOne, handleNameUpdate, appContent } =
    useContext(BoilerPlateContext);

  // Logging the extracted values to the console for debugging purposes
  console.log({ count, name, addOne, handleNameUpdate, appContent });

  // Rendering the component's JSX
  return (
    <div>
      <h1>{appContent.heading}</h1>
      <p>{appContent.reactivedataExampleOne}</p>
      <button onClick={addOne}>Count: {count}</button>
      <hr />
      <p>{appContent.reactivedataExampleTwo}</p>
      <button onClick={handleNameUpdate}>Name: {name}</button>
      <p>{appContent.reactivedataExampleThree}</p>
      <p>{appContent.componentInfo}</p>
    </div>
  );
};
