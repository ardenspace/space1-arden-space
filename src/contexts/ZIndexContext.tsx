"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ZIndexContextType = {
  isBlogOnTop: boolean;
  setIsBlogOnTop: (value: boolean) => void;
};

const ZIndexContext = createContext<ZIndexContextType | undefined>(undefined);

export const ZIndexProvider = ({ children }: { children: ReactNode }) => {
  const [isBlogOnTop, setIsBlogOnTop] = useState(false);

  return (
    <ZIndexContext.Provider value={{ isBlogOnTop, setIsBlogOnTop }}>
      {children}
    </ZIndexContext.Provider>
  );
};

export const useZIndex = () => {
  const context = useContext(ZIndexContext);
  if (!context) {
    throw new Error("useZIndex must be used within a ZIndexProvider");
  }
  return context;
};
