"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/context/locale-context";
import Link from "next/link";
import { Cat } from "lucide-react";
import { silkscreen } from "@/lib/fonts";

const stylesMap: Record<string, { bg: string; text: string }> = {
  "/": { bg: "bg-[#BFFEB8]", text: "text-[#7448ff]" },
  "/blog": { bg: "bg-[#fdcef7]", text: "text-[#23C4AF]" },
  "/arden": { bg: "bg-[#aa9ced]", text: "text-[#ECE7D4]" },
};

function NavLink({ title, href }: { title: string; href: string }) {
  const pathname = usePathname();

  const isActive =
    href === "/blog" ? pathname.startsWith("/blog") : pathname === href;

  return (
    <Link href={href}>
      <span
        className={`tab-item-layout ${
          isActive
            ? "bg-bgMain text-[var(--bgSecond)] font-bold"
            : "bg-bgSecond text-[var(--bgWhite)] font-light"
        }`}
      >
        {title}
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const navItems = [
    { title: "Home", href: `/` },
    { title: "Blog", href: `/${locale}/blog` },
    { title: "Arden", href: `/${locale}/arden` },
  ];

  // pathname 바뀔 때마다 scrollToTop
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  // pathname 바뀔 때마다 header bg 바꾸기
  function getCurrentStyle(pathname: string) {
    const match = Object.keys(stylesMap)
      .sort((a, b) => b.length - a.length)
      .find((key) => pathname.startsWith(key));

    return (
      stylesMap[match ?? "/"] || {
        bg: "bg-[#bcfe4a]",
        text: "text-[#7448FF]",
      }
    );
  }
  const currentStyle = getCurrentStyle(pathname);

  return (
    <header className="fixed w-full flex max-w-screen-md z-50 bg-bgMain border-3 border-t-[var(--bgWhite)] border-r-[var(--bgWhite)] border-l-[var(--bgWhite)] border-b-0">
      <nav className="w-full border-b-3 border-b-[var(--bgSecond)]">
        <div
          className={`w-full flex items-center justify-between px-5 h-10 border-bgSecond ${currentStyle.bg}`}
        >
          <span
            className={`${silkscreen.className} font-bold text-md ${currentStyle.text}`}
          >
            Hello, arden'space!
          </span>
          <div className="flex">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={`flex items-center justify-center h-6 w-6 ml-1 rounded-2 border-2 ${currentStyle.text}`}
              >
                <Cat size={19} className={`${currentStyle.text}`} />
              </div>
            ))}
          </div>
        </div>

        <ul className="flex justify-between mt-13 px-2">
          <div>
            {navItems.slice(0, 2).map(({ title, href }) => (
              <NavLink key={href} title={title} href={href} />
            ))}
          </div>
          <div>
            <NavLink title={navItems[2].title} href={navItems[2].href} />
          </div>
        </ul>
      </nav>
    </header>
  );
}
