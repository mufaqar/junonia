import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <SettingsContext.Provider
      value={{
        isMobile,
        setIsMobile,
        searchOpen,
        setSearchOpen,
        setSearchValue,
        searchValue,
        windowSize,
        setWindowSize
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

