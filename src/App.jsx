import { useEffect, useState } from "react";
import FlagCards from "./components/FlagCards";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [flagData, setFlagData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchCountry, setSearchCountry] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const API = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setLoading(false);
        setFlagData(data);
        // console.log(data);
      } catch (error) {
        setError(error.message);
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const newFlagData = flagData.filter((flag) =>
    flag.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchBar
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        flagData={flagData}
        setFlagData={setFlagData}
        darkMode={darkMode}
      />
      <FlagCards
        newFlagData={newFlagData}
        loading={loading}
        error={error}
        darkMode={darkMode}
      />
    </>
  );
};

export default App;
