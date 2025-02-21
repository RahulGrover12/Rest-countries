import { CiSearch } from "react-icons/ci";
import Filter from "./Filter";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sorting from "./Sorting";
const SearchBar = ({
  searchCountry,
  setSearchCountry,
  flagData,
  setFlagData,
}) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="flex flex-col gap-5 mt-10 justify-between ml-10 md:flex-row">
      <div
        className={`flex gap-5 items-center rounded-lg shadow-lg w-[30%] h-[10%]
        ${darkMode ? "bg-[#213943] text-white" : "bg-white text-black"}`}
      >
        <CiSearch className="h-7 w-7 ml-5 text-gray-500" />
        <input
          type="text"
          className={`h-15 w-60 text-xl focus:outline-0 
            ${darkMode ? "bg-[#213943] text-white" : "bg-white text-black"}`}
          placeholder="Search for a country"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
      </div>
      <Sorting flagData={flagData} setFlagData={setFlagData} />
      <Filter flagData={flagData} setFlagData={setFlagData} />
    </div>
  );
};

export default SearchBar;
