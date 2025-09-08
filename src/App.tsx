import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AppContextProvider } from "./contexts/AppContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
