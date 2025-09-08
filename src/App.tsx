import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { AppContextProvider } from "./contexts/AppContext";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
