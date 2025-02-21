import { useEffect, useState } from "react";

const Filter = ({ flagData, setFlagData, darkMode }) => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [originalData, setOriginalData] = useState([]);

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
    <div>
      <select
        name="filter-by-region"
        className={`h-13 w-60 shadow-md rounded-xl text-lg mr-10 p-3 px-5 appearance-none focus:outline-none
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
  );
};

export default Filter;
