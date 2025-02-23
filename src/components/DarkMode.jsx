import { useContext } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      className="flex items-center gap-2 md:gap-3 cursor-pointer"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      {darkMode ? (
        <IoMoonSharp className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
      ) : (
        <IoMoonOutline className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
      )}
      <p className="text-lg md:text-xl font-medium">Dark Mode</p>
    </div>
  );
};

export default DarkMode;
