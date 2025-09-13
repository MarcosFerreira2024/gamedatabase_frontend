import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AppContextProvider } from "./contexts/AppContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Catalog from "./pages/Catalog";
import { SidebarProvider } from "./contexts/SidebarContext";
import { QueryProvider } from "./contexts/QueryContext";
import Game from "./pages/Game";

function App() {
  return (
    <AppContextProvider>
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/home/games"
              element={
                <QueryProvider>
                  <Catalog />
                </QueryProvider>
              }
            />
            <Route path="/home/game/:id" element={<Game />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </AppContextProvider>
  );
}

export default App;
