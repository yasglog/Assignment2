import { createContext, useState } from "react";

export const MyContext = createContext();

function AppContextProvider({ children }) {
  const [name, setName] = useState("yash");
  const [searchVal, setSearchVal] = useState("");
  const [theme, setTheme] = useState("white");

  const value = {
    name,
    searchVal,
    theme,
    setName,
    setSearchVal,
    setTheme,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default AppContextProvider;
