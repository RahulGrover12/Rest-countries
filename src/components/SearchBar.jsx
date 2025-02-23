import { CiSearch } from "react-icons/ci";
import Filter from "./Filter";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";

const SearchBar = () => {
  const { darkMode } = useContext(ThemeContext);
  const { searchCountry, setSearchCountry } = useContext(DataContext);

  return (
    <div className="flex flex-col gap-5 mt-10 justify-between px-5 md:flex-row md:items-center md:px-10">
      <div
        className={`flex gap-5 items-center rounded-lg shadow-lg w-full md:w-[40%] h-[3rem] px-5
        ${darkMode ? "bg-[#213943] text-white" : "bg-white text-black"}`}
      >
        <CiSearch className="h-6 w-6 text-gray-500" />
        <input
          type="text"
          className={`w-full text-xl focus:outline-0 bg-transparent ${
            darkMode ? "bg-[#213943] text-white" : "bg-white text-black"
          }`}
          placeholder="Search for a country"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
      </div>
      <Filter />
    </div>
  );
};

export default SearchBar;
