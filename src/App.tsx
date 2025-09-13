import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AppContextProvider } from "./contexts/AppContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Catalog from "./pages/Catalog";
import { SidebarProvider } from "./contexts/SidebarContext";
import { QueryProvider } from "./contexts/QueryContext";
import Game from "./pages/Game";
import Search from "./pages/Search";
import MyGames from "./pages/MyGames";

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
                <QueryProvider
                  basePath="/home/games"
                  allowedParams={[
                    "name",
                    "genres",
                    "platforms",
                    "modes",
                    "themes",
                    "playerPerspectives",
                    "franchises",
                    "developers",
                    "summary",
                    "usersScore",
                    "releaseDate",
                    "publisher",
                    "sortBy",
                    "take",
                    "page",
                    "style",
                    "order",
                  ]}
                >
                  <Catalog />
                </QueryProvider>
              }
            />
            <Route path="/home/game/:id" element={<Game />} />
            <Route
              path="/home/search"
              element={
                <QueryProvider
                  allowedParams={["name", "sortBy", "take", "page", "style", "order"]}
                  basePath="/home/search"
                >
                  <Search />
                </QueryProvider>
              }
            />
                        <Route path="/home/my-games" element={<MyGames />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </AppContextProvider>
  );
}

export default App;
