import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Flags from "./pages/Flags";
import { ThemeProvider } from "./context/ThemeContext";
import { DataProvider } from "./context/DataContext";
const App = () => {
  return (
    <DataProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:countryName" element={<Flags />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </DataProvider>
  );
};

export default App;
