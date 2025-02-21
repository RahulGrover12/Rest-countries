import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Flags from "./pages/Flags";
import { ThemeProvider } from "./context/ThemeContext";
const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:countryName" element={<Flags />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
