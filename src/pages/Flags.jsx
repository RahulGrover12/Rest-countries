import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { ThemeContext } from "../context/ThemeContext";
import { FaArrowLeft } from "react-icons/fa";

const Flags = () => {
  const { darkMode } = useContext(ThemeContext);

  const { countryName } = useParams();
  const navigate = useNavigate();

  const [countryDetail, setCountryDetail] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    async function fetchCountryDetail() {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await res.json();
        setCountryDetail(data[0]);

        if (data[0].borders) {
          fetchBorderCountryNames(data[0].borders);
        }
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    }

    async function fetchBorderCountryNames(borders) {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${borders}`
        );
        const data = await res.json();
        setBorderCountries(data);
      } catch (error) {
        console.error("Error fetching border country names:", error);
      }
    }

    fetchCountryDetail();
  }, [countryName]);

  return (
    <>
      <Header />
      <div
        className={`p-10   ${
          darkMode ? "bg-[#1c2c37] text-white" : "bg-gray-50"
        }`}
      >
        <Link
          to="/"
          className={`p-2 flex
             shadow-lg w-24 md:ml-6 md:mb-16 ${
               darkMode ? "bg-[#213943] text-white" : "bg-white text-black"
             }`}
        >
          <FaArrowLeft className="mt-1 mr-2" />
          Back
        </Link>
        <div>
          {countryDetail ? (
            <div className="flex gap-16 flex-col md:flex-row md:ml-6">
              <div>
                <img
                  src={countryDetail.flags.png}
                  alt={countryDetail.name.common}
                  className="mt-4 w-72 h-40 md:w-[596px] md:h-[396px]"
                />
              </div>
              <div className="flex flex-col flex-wrap gap-8 md:flex-row md:mt-24 md:ml-24">
                <div className="md:mr-20 text-xl">
                  <p className="font-extrabold text-4xl md:mb-6 md:-mt-11">
                    {countryDetail.name.common}
                  </p>
                  <p>
                    <span className="font-medium mr-1">Native Name:</span>
                    {Object.values(countryDetail.name.nativeName)?.[0]
                      ?.common || "Unknown"}
                  </p>
                  <p>
                    <span className="font-medium mr-1">Population:</span>
                    {countryDetail.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-medium mr-1">Region:</span>
                    {countryDetail.region}
                  </p>
                  <p>
                    <span className="font-medium mr-1">Sub Region:</span>
                    {countryDetail.subregion}
                  </p>
                  <p>
                    <span className="font-medium mr-1">Capital:</span>
                    {countryDetail.capital || "Unknown"}
                  </p>
                </div>
                <div className="text-xl">
                  <p>
                    <span className="font-medium mr-1">Top Level Domain:</span>
                    {countryDetail.tld[0] || "Unknown"}
                  </p>
                  <p>
                    <span className="font-medium mr-1">Currencies:</span>
                    {Object.values(countryDetail.currencies)?.[0]?.name ||
                      "Unknown"}
                  </p>
                  <p>
                    <span className="font-medium mr-1">Languages:</span>
                    {Object.values(countryDetail.languages)?.join(", ") ||
                      "Unknown"}
                  </p>
                </div>
                <div className="text-xl">
                  <p className="font-medium">Borders:</p>
                  {borderCountries.length > 0 ? (
                    borderCountries.map((borderCountry) => (
                      <button
                        key={borderCountry.cca3}
                        className={` cursor-pointer ${
                          darkMode
                            ? "bg-[#2b3743] text-white"
                            : "bg-white text-black"
                        } border rounded px-2 py-1 m-1 shadow`}
                        onClick={() =>
                          navigate(`/${borderCountry.name.common}`)
                        }
                      >
                        {borderCountry.name.common}
                      </button>
                    ))
                  ) : (
                    <span>No bordering countries</span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div
          className={`${
            darkMode ? "bg-[#2b3743] text-white " : "bg-white"
          }  mb-[13.8rem]`}
        ></div>
      </div>
    </>
  );
};

export default Flags;
