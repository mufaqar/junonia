import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  console.log("🚀 ~ file: setting-context.jsx:9 ~ SettingsProvider ~ searchValue:", searchValue)

  return (
    <SettingsContext.Provider
      value={{
        isMobile,
        setIsMobile,
        searchOpen,
        setSearchOpen,
        setSearchValue,
        searchValue
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

