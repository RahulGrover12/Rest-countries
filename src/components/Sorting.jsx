import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Sorting = ({ flagData, setFlagData }) => {
  const [originalData, setOriginalData] = useState([]);
  const [selectedSort, setSelectedSort] = useState("All");
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (originalData.length === 0) {
      setOriginalData(flagData);
    }
  }, [flagData]);

  const handleSelectedSort = (e) => {
    const val = e.target.value;
    setSelectedSort(val);

    switch (val) {
      case "All":
        setFlagData(originalData);
        break;

      case "popDesc": {
        const desc = [...originalData].sort(
          (a, b) => b.population - a.population
        );
        setFlagData(desc);
        break;
      }

      case "popAsc": {
        const asc = [...originalData].sort(
          (a, b) => a.population - b.population
        );
        setFlagData(asc);
        break;
      }
      case "areaDesc": {
        const desc = [...originalData].sort((a, b) => b.area - a.area);
        setFlagData(desc);
        break;
      }
      case "areaAsc": {
        const asc = [...originalData].sort((a, b) => a.area - b.area);
        setFlagData(asc);
        break;
      }

      default:
        setFlagData(originalData);
    }
  };

  return (
    <div className="w-[17%]">
      <select
        name="filter-by-region"
        className={`h-13 w-60 shadow-md rounded-xl text-lg mr-10 p-3 px-5 appearance-none cursor-pointer focus:outline-none
        ${darkMode ? "bg-[#213943] text-white" : "bg-white text-black"}`}
        value={selectedSort}
        onChange={handleSelectedSort}
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
