import { useEffect } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
const DarkMode = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#1c2c37";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [darkMode]);
  return (
    <div className="flex gap-3">
      {darkMode ? (
        <IoMoonSharp className="h-6 w-6 mt-[4px] text-gray-500" />
      ) : (
        <IoMoonOutline className="h-6 w-6 mt-[4px]" />
      )}
      <p className="text-lg font-medium mr-10 lg:text-xl">
        <button
          className="cursor-pointer"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          Dark Mode
        </button>
      </p>
    </div>
  );
};

export default DarkMode;
