"use client";

import {
  createContext,
  useEffect,
  useContext,
  useState,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/hooks/use-locale";

type ZIndexContextType = {
  currentPosition: string;
  setCurrentPosition: (value: string) => void;
};

const ZIndexContext = createContext<ZIndexContextType | undefined>(undefined);

export const ZIndexProvider = ({ children }: { children: ReactNode }) => {
  // blog, port
  const [currentPosition, setCurrentPosition] = useState("port");
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    if (pathname.startsWith(`/${locale}/blog`)) {
      setCurrentPosition("blog");
    } else {
      setCurrentPosition("port");
    }
  }, [pathname]);

  return (
    <ZIndexContext.Provider
      value={{
        currentPosition,
        setCurrentPosition,
      }}
    >
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
