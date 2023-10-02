// Importing necessary components and context providers
import { Logos } from "./components/Logos";
// Importing the BookProvider context provider which provides theme or data related to books.
import { BookProvider } from "./themes/BookTheme";
// Importing the AppDataProvider context provider which provides general app-related data or theme.
import { AppDataProvider } from "./themes/AppTheme";
// Importing the QuotesProvider context provider which provides theme or data related to quotes.
import { QuotesProvider } from "./themes/QuotesTheme";
import { BookDetails } from "./components/BookDetails";
import { Home } from "./components/Home";
import { QuotesDisplay } from "./components/QuotesDisplay";

// Defining a functional component named 'App'
export const App = () => {
  // Rendering the component's JSX
  return (
    // Using the AppDataProvider context provider to wrap and provide app-related data or theme to its children.
    <AppDataProvider>
      {/* Using the BooksProvider context provider to wrap and provide book-related data or theme to its children. */}
      <BookProvider>
        {/* Using the QuotesProvider context provider to wrap and provide quotes-related data or theme to its children. */}
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
