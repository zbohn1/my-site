import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [animationPresent, setAnimationPresent] = useState(true);

  return (
    <Context.Provider value={{ animationPresent, setAnimationPresent }}>
      {children}
    </Context.Provider>
  );
};
