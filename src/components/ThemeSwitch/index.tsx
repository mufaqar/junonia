import { SettingsContext } from "@/context/setting-context";
import { useTheme } from "next-themes";
import React, { useContext } from "react";
import { ImSun } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";

const ThemeSwitch = () => {
  const {
    setDarkMode,
    darkMode
  } = useContext(SettingsContext);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const HandleTheme = ()=>{
    theme == "dark" ? setTheme("light") : setTheme("dark")
    setDarkMode(!darkMode)
  }
  return (
    <button
      onClick={() => HandleTheme()}
      className="dark:bg-light-gray text-pure bg-yellow p-1 rounded-md dark:text-yellow"
    >
      {theme == "dark" ? <ImSun size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
};

export default ThemeSwitch;
