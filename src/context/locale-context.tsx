"use client";

import { createContext, useContext } from "react";

const LocaleContext = createContext<{ locale: string }>({ locale: "ko" });

export const useLocale = () => useContext(LocaleContext);

export function LocalProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  );
}
