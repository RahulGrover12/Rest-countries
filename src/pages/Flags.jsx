import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";
import { FaArrowLeft } from "react-icons/fa";

const Flags = () => {
  const { darkMode } = useContext(ThemeContext);
  const { flagData } = useContext(DataContext);
  const { countryName } = useParams();
  const navigate = useNavigate();

  const countryDetail = flagData.find(
    (country) => country.name.common.toLowerCase() === countryName.toLowerCase()
  );

  const borderCountries = countryDetail.borders
    ? flagData.filter((country) => countryDetail.borders.includes(country.cca3))
    : [];

  return (
    <>
      <Header />
      <div
        className={`p-10 min-h-screen ${
          darkMode ? "bg-[#1c2c37] text-white" : "bg-gray-50"
        }`}
      >
        <Link
          to="/"
          className={`p-2 flex items-center shadow-lg w-28 md:ml-6 md:mb-12 ${
            darkMode ? "bg-[#213943] text-white" : "bg-white text-black"
          } rounded-md`}
        >
          <FaArrowLeft className="mr-2" />
          Back
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-6 md:mt-10">
          <div>
            <img
              src={countryDetail.flags.png}
              alt={countryDetail.name.common}
              className="w-full max-w-lg md:max-w-xl rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-8">
            <p className="font-extrabold text-4xl">
              {countryDetail.name.common}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg">
              <div className="flex flex-col gap-0.5">
                <p>
                  <span className="font-medium">Native Name:</span>{" "}
                  {Object.values(countryDetail.name.nativeName)?.[0]?.common ||
                    "Unknown"}
                </p>
                <p>
                  <span className="font-medium">Population:</span>{" "}
                  {countryDetail.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-medium">Region:</span>{" "}
                  {countryDetail.region}
                </p>
                <p>
                  <span className="font-medium">Sub Region:</span>{" "}
                  {countryDetail.subregion}
                </p>
                <p>
                  <span className="font-medium">Capital:</span>{" "}
                  {countryDetail.capital || "Unknown"}
                </p>
              </div>

              <div className="flex flex-col gap-0.5">
                <p>
                  <span className="font-medium">Top Level Domain:</span>{" "}
                  {countryDetail.tld?.[0] || "Unknown"}
                </p>
                <p>
                  <span className="font-medium">Currencies:</span>{" "}
                  {Object.values(countryDetail.currencies)?.[0]?.name ||
                    "Unknown"}
                </p>
                <p>
                  <span className="font-medium">Languages:</span>{" "}
                  {Object.values(countryDetail.languages)?.join(", ") ||
                    "Unknown"}
                </p>
              </div>
            </div>

            <div>
              <p className="font-medium text-lg">Border Countries:</p>
              {borderCountries.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-2">
                  {borderCountries.map((borderCountry) => (
                    <button
                      key={borderCountry.cca3}
                      className={`cursor-pointer ${
                        darkMode
                          ? "bg-[#2b3743] text-white"
                          : "bg-white text-black"
                      } border rounded px-4 py-2 shadow`}
                      onClick={() => navigate(`/${borderCountry.name.common}`)}
                    >
                      {borderCountry.name.common}
                    </button>
                  ))}
                </div>
              ) : (
                <span>No bordering countries</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flags;
