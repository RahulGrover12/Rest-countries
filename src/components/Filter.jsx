import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import FilterSubRegion from "./FilterSubRegion";
const Filter = ({ flagData, setFlagData }) => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [originalData, setOriginalData] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    if (originalData.length === 0) {
      setOriginalData(flagData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flagData]);

  const handleSelectedRegion = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);

    if (region == "All") {
      setFlagData(originalData);
    } else {
      const filterData = originalData.filter((flag) => flag.region === region);
      setFlagData(filterData);
    }
  };

  return (
    <div className="flex gap-5 flex-col w-full lg:flex-row justify-end xl:gap-35 xl:mr-35 lg:gap-35 lg:mr-80">
      <div className="w-[17%]">
        <select
          name="filter-by-region"
          className={`h-13 w-60 shadow-md cursor-pointer rounded-xl text-lg p-3 px-5 appearance-none focus:outline-none
            ${darkMode ? "bg-[#213943] text-white" : "bg-white text-black"}`}
          value={selectedRegion}
          onChange={handleSelectedRegion}
        >
          <option value="All" className="hidden">
            Filter by Region
          </option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <FilterSubRegion
        flagData={flagData}
        setFlagData={setFlagData}
        selectedRegion={selectedRegion}
      />
    </div>
  );
};

export default Filter;
