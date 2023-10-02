// Importing necessary components and context providers
import { Logos } from "./components/Logos";
import { BookProvider } from "./themes/BookTheme";
import { AppDataProvider } from "./themes/AppTheme";
import { QuotesProvider } from "./themes/QuotesTheme";
import { BookDetails } from "./components/BookDetails";
import { Home } from "./components/Home";
import { QuotesDisplay } from "./components/QuotesDisplay";

// Defining a functional component named 'App'
export const App = () => {
  // Rendering the component's JSX
  return (
    // Wrapping everything inside the 'AppProviders' component, which provides context values to its children
    <AppDataProvider>
      <BookProvider>
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
