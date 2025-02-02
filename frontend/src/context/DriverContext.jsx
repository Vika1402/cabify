import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DriverDataContext = createContext();

export const DriverContext = ({ children }) => {
  const [driver, setDriver] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  return (
    <DriverDataContext.Provider
      value={{ driver, setDriver, isLoading, setIsLoading, err, setErr }}
    >
      {children}
    </DriverDataContext.Provider>
  );
};
