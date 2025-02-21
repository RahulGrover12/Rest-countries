import { useContext } from "react";
import DarkMode from "./DarkMode";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-25 shadow-md flex items-center justify-between 
      ${darkMode ? "bg-[#213943] text-white" : "bg-white text-black"}`}
    >
      <h1 className="font-bold text-xl ml-10 lg:text-4xl">
        Where in the world?
      </h1>
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Header;
