import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <SettingsContext.Provider
      value={{
        isMobile,
        setIsMobile,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

