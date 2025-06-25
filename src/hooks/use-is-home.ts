"use client";

import { usePathname } from "next/navigation";

export default function useIsHome() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  return isHome;
}
