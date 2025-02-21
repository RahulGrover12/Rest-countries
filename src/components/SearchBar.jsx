import { CiSearch } from "react-icons/ci";
import Filter from "./Filter";
const SearchBar = ({
  searchCountry,
  setSearchCountry,
  flagData,
  setFlagData,
  darkMode,
}) => {
  return (
    <div className="flex mt-10 justify-between">
      <div
        className={`flex gap-5 items-center rounded-lg shadow-lg ml-10 
        ${darkMode ? "bg-[#213943] text-white" : "bg-white text-black"}`}
      >
        <CiSearch className="h-7 w-7 ml-5 text-gray-500" />
        <input
          type="text"
          className={`h-15 w-130 text-xl focus:outline-0 
            ${darkMode ? "bg-[#213943] text-white" : "bg-white text-black"}`}
          placeholder="Search for a country"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
      </div>
      <Filter
        flagData={flagData}
        setFlagData={setFlagData}
        darkMode={darkMode}
      />
    </div>
  );
};

export default SearchBar;
