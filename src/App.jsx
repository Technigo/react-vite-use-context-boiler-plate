// Importing necessary components and context providers
import { Logos } from "./components/Logos";
import { AppProviders } from "./providers/AppProviders";
import { BookDetails } from "./components/BookDetails";
import { Home } from "./components/Home";
import { QuotesDisplay } from "./components/QuotesDisplay";

// Defining a functional component named 'App'
export const App = () => {
  // Rendering the component's JSX
  return (
    // Wrapping everything inside the 'AppProviders' component, which provides context values to its children
    <AppProviders>
      <>
        <Logos />
        <div className="card">
          <Home />
          <BookDetails />
          <QuotesDisplay />
        </div>
      </>
    </AppProviders>
  );
};
