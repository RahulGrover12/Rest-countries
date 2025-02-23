import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";
import Sorting from "./Sorting";

const Filter = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedSubRegion, setSelectedSubRegion] = useState("All");
  const [selectedSort, setSelectedSort] = useState("All");
  const [originalData, setOriginalData] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  const { flagData, setFlagData } = useContext(DataContext);

  useEffect(() => {
    if (originalData.length === 0) {
      setOriginalData(flagData);
    }
  }, [flagData]);

  const applyFiltersAndSorting = (region, subRegion, sort) => {
    let filteredData = originalData;

    if (region !== "All") {
      filteredData = filteredData.filter((flag) => flag.region === region);
    }

    if (subRegion !== "All") {
      filteredData = filteredData.filter(
        (flag) => flag.subregion === subRegion
      );
    }

    switch (sort) {
      case "popDesc":
        filteredData = [...filteredData].sort(
          (a, b) => b.population - a.population
        );
        break;
      case "popAsc":
        filteredData = [...filteredData].sort(
          (a, b) => a.population - b.population
        );
        break;
      case "areaDesc":
        filteredData = [...filteredData].sort((a, b) => b.area - a.area);
        break;
      case "areaAsc":
        filteredData = [...filteredData].sort((a, b) => a.area - b.area);
        break;
      default:
        break;
    }

    setFlagData(filteredData);
  };

  const handleRegion = (e) => {
    const value = e.target.value;
    setSelectedRegion(value);
    setSelectedSubRegion("All");
    applyFiltersAndSorting(value, "All", selectedSort);
  };

  const handleSubRegion = (e) => {
    const value = e.target.value;
    setSelectedSubRegion(value);
    applyFiltersAndSorting(selectedRegion, value, selectedSort);
  };

  const handleSort = (sortType) => {
    setSelectedSort(sortType);
    applyFiltersAndSorting(selectedRegion, selectedSubRegion, sortType);
  };

  const subRegions = [
    ...new Set(
      originalData
        .filter(
          (flag) => selectedRegion === "All" || flag.region === selectedRegion
        )
        .map((flag) => flag.subregion)
    ),
  ];

  return (
    <div className="flex flex-col gap-5 w-full md:flex-row md:items-center md:justify-between px-5 lg:px-10">
      <Sorting selectedSort={selectedSort} handleSort={handleSort} />

      <div className="w-full md:w-[45%] flex flex-col md:flex-row gap-5">
        <select
          className={`w-full md:w-[50%] h-12 shadow-md cursor-pointer rounded-xl text-lg p-3 px-5 appearance-none focus:outline-none ${
            darkMode ? "bg-[#213943] text-white" : "bg-white text-black"
          }`}
          value={selectedRegion}
          onChange={handleRegion}
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

        <select
          className={`w-full md:w-[50%] h-12 shadow-md cursor-pointer rounded-xl text-lg p-3 px-5 appearance-none focus:outline-none ${
            darkMode ? "bg-[#213943] text-white" : "bg-white text-black"
          }`}
          value={selectedSubRegion}
          onChange={handleSubRegion}
          disabled={selectedRegion === "All"}
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
    </div>
  );
};

export default Filter;
