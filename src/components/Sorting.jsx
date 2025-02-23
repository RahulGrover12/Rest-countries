import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Sorting = ({ selectedSort, handleSort }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-full md:w-[24%]">
      <select
        className={`w-full h-12 shadow-md rounded-xl text-lg p-3 px-5 appearance-none cursor-pointer focus:outline-none ${
          darkMode ? "bg-[#213943] text-white" : "bg-white text-black"
        }`}
        value={selectedSort}
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="All" className="hidden">
          Sort By:
        </option>
        <option value="popDesc">Population: High to Low</option>
        <option value="popAsc">Population: Low to High</option>
        <option value="areaDesc">Area: High to Low</option>
        <option value="areaAsc">Area: Low to High</option>
      </select>
    </div>
  );
};

export default Sorting;
