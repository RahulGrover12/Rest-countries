import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const FilterSubRegion = ({ flagData, setFlagData, selectedRegion }) => {
  const [selectedSubRegion, setSelectedSubRegion] = useState("All");
  const [originalData, setOriginalData] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (originalData.length === 0) {
      setOriginalData(flagData);
    }
  }, [flagData]);

  const handleSubRegion = (e) => {
    const subRegion = e.target.value;
    setSelectedSubRegion(subRegion);

    if (subRegion == "All") {
      setFlagData(originalData);
    } else {
      const filteredData = originalData.filter(
        (flag) => flag.subregion === subRegion
      );
      setFlagData(filteredData);
    }
  };

  const subRegions = [
    ...new Set(
      originalData
        .filter((flag) => flag.region === selectedRegion)
        .map((flag) => flag.subregion)
    ),
  ];

  return (
    <div className="w-[17%]">
      <select
        name="filter-by-region"
        className={`h-13 w-60 shadow-md cursor-pointer rounded-xl text-lg mr-10 p-3 px-5 appearance-none focus:outline-none
        ${darkMode ? "bg-[#213943] text-white" : "bg-white text-black"}`}
        value={selectedSubRegion}
        onChange={handleSubRegion}
      >
        <option value="All" className="hidden">
          Filter by Sub-Region
        </option>
        <option value="All">All</option>
        {subRegions.map((sub, index) => (
          <option key={index} value={sub}>
            {sub}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSubRegion;
