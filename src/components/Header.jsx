import { useContext } from "react";
import DarkMode from "./DarkMode";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`w-full h-25 shadow-md flex items-center justify-between px-5 md:px-10 lg:px-20 
      ${darkMode ? "bg-[#213943] text-white" : "bg-white text-black"}`}
    >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        Where in the world?
      </h1>
      <DarkMode />
    </div>
  );
};

export default Header;
