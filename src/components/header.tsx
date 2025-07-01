"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "@/hooks/use-locale";
import Link from "next/link";
import { Languages, X } from "lucide-react";
import { silkscreen } from "@/lib/fonts";
import { useWindowSize } from "@/hooks/use-size";

const stylesMap: Record<string, { bg: string; text: string }> = {
  "/": { bg: "bg-[var(--portTt)]", text: "text-[var(--homeTt)]" },
  "/blog": { bg: "bg-[var(--postHd)]", text: "text-[var(--mdxMain)]" },
  "/arden": { bg: "bg-[var(--bgSecond)]", text: "text-[var(--portTt)]" },
};

function NavLink({ title, href }: { title: string; href: string }) {
  const pathname = usePathname();
  const locale = useLocale();

  const isActive =
    href === `/${locale}/blog`
      ? pathname.startsWith(`/${locale}/blog`)
      : pathname === href;

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
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const navItems = [
    // { title: "Home", href: `/${locale}` },
    { title: "Blog", href: `/${locale}/blog` },
    { title: "Arden", href: `/${locale}/arden` },
  ];

  // pathname 바뀔 때마다 scrollToTop
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  const size = useWindowSize();
  if (!size) return null;

  // pathname 바뀔 때마다 header bg 바꾸기
  function getCurrentStyle(pathname: string) {
    const controlPathname = pathname.replace(`/${locale}`, "");

    const match = Object.keys(stylesMap)
      .sort((a, b) => b.length - a.length)
      .find((key) => controlPathname.startsWith(key));

    return (
      stylesMap[match ?? "/"] || {
        bg: "bg-[var(--portTt)]",
        text: "text-[var(--homeTt)]",
      }
    );
  }
  const currentStyle = getCurrentStyle(pathname);

  // 한<->영 함수
  const onSwitchLanguages = () => {
    const fromCategory = searchParams.get("fc");
    const newLocale = locale === "ko" ? "en" : "ko";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    let newPath = segments.join("/");

    if (fromCategory) {
      newPath += `?fc=${fromCategory}`;
    }
    router.push(newPath);
  };

  return (
    <header className="fixed w-full flex max-w-screen-md z-50 bg-bgMain border-3 border-t-[var(--bgWhite)] border-r-[var(--bgWhite)] border-l-[var(--bgWhite)] border-b-0">
      <nav className="w-full border-b-3 border-b-[var(--bgSecond)]">
        <div
          className={`w-full flex items-center justify-between h-10 border-bgSecond ${
            currentStyle.bg
          } ${size.width > 450 ? "px-5" : size.width > 400 ? "px-3" : "px-2"}`}
        >
          <span
            className={`${silkscreen.className} ${currentStyle.text} ${
              size.width > 400 ? "text-md" : "text-sm"
            } font-bold`}
          >
            Hello, arden&apos;space!
          </span>
          <div className="flex">
            {/* <div className={`icon-div ${currentStyle.text}`}>
              <Cat size={19} className={`${currentStyle.text}`} />
            </div> */}
            <div
              className={`icon-div ${currentStyle.text} cursor-pointer`}
              onClick={onSwitchLanguages}
            >
              <Languages size={19} className={`${currentStyle.text}`} />
            </div>
            <div
              className={`icon-div ${currentStyle.text} cursor-pointer`}
              onClick={() => {
                router.push(`/${locale}`);
              }}
            >
              <X size={20} className={`${currentStyle.text}`} />
            </div>
          </div>
        </div>

        <ul className="flex justify-between mt-13 px-2">
          {navItems.map(({ title, href }) => (
            <NavLink key={href} title={title} href={href} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
