import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [flagData, setFlagData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchCountry, setSearchCountry] = useState("");

  const API = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setLoading(false);
        setFlagData(data);
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
    <DataContext.Provider
      value={{
        flagData,
        setFlagData,
        loading,
        setLoading,
        error,
        setError,
        searchCountry,
        setSearchCountry,
        newFlagData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
