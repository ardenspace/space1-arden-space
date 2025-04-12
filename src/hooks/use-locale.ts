import { usePathname } from "next/navigation";

export function useLocale(defaultLocale = "ko") {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const locale = segments[1];

  return locale || defaultLocale;
}
