// Importing necessary components and context providers
import { Logos } from "./components/Logos";
// Importing the BookProvider context provider which provides data related to books.
import { BookProvider } from "./contexts/BookContext";
// Importing the AppDataProvider context provider which provides general app-related data.
import { AppDataProvider } from "./contexts/AppContext";
// Importing the QuotesProvider context provider which provides data related to quotes.
import { QuotesProvider } from "./contexts/QuotesContext";
import { BookDetails } from "./components/BookDetails";
import { Home } from "./components/Home";
import { QuotesDisplay } from "./components/QuotesDisplay";

// Defining a functional component named 'App'
export const App = () => {
  // Rendering the component's JSX
  return (
    // Using the AppDataProvider context provider to wrap and provide app-related data to its children.
    <AppDataProvider>
      {/* Using the BooksProvider context provider to wrap and provide book-related data to its children. */}
      <BookProvider>
        {/* Using the QuotesProvider context provider to wrap and provide quotes-related data to its children. */}
        <QuotesProvider>
          <>
            <Logos />
            <div className="card">
              <Home />
              <hr />
              <BookDetails />
              <hr />
              <QuotesDisplay />
            </div>
          </>
        </QuotesProvider>
      </BookProvider>
    </AppDataProvider>
  );
};
