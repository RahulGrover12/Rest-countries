import { useContext } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";
const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className="flex gap-3 cursor-pointer">
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
