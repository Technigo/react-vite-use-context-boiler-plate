// Import necessary hooks and context
import { useContext } from "react";
import BoilerPlateContext from "../contexts/BoilerPlateContext";

export const QuotesDisplay = () => {
  // Use the useContext hook to access the BoilerPlateContext and destructure the 'quotes' object from it
  const { quotes } = useContext(BoilerPlateContext);

  // Log the fetched quotes to the console for debugging purposes
  console.log(quotes);

  // Check if the quotes have been fetched from the context
  // If the quotes object is not available or the inner quotes array is empty, display a loading message
  if (!quotes || quotes.length === 0) {
    return <p>Loading quotes...</p>;
  }

  // If quotes are available, render them in a list format
  return (
    <div>
      <h2>Quotes:</h2>
      <ul>
        {/* Iterate over the 'quotes' array and display each quote and its author */}
        {quotes.quotes.map((quote) => (
          <li key={quote.id}>
            "{quote.quote}" - <strong>{quote.author}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};
