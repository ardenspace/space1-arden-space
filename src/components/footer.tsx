"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, LinkedinIcon, Twitter } from "lucide-react";
import useIsHome from "@/hooks/use-is-home";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const isHome = useIsHome();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <footer className="w-full flex justify-center">
      <section
        className={`w-full h-[40px] bg-[var(--footerBg)] border-2 border-[var(--bgWhite)] ${
          isHome ? "max-w-screen-lg" : "max-w-screen-md"
        }`}
      >
        <div
          className={`w-full h-full flex items-center justify-between ${
            windowWidth !== null && windowWidth > 400 ? "px-3" : "px-1"
          }`}
        >
          <div className="flex items-center text-[var(--ttBlack)] text-sm">
            <span className="shadow-out-button px-1 mr-2">
              <Link href="https://github.com/ardenspace" target="_blank">
                <Github size={21} color={`var(--ttBlack)`} />
              </Link>
            </span>
            <span className="shadow-in-button min-w-[100px]">arden's blog</span>
            <span className="shadow-out-button min-w-[105px] px-2">
              who's arden?
            </span>
          </div>

          <div className="flex items-center text-[var(--ttBlack)] text-lg">
            <div onClick={onSwitchLanguages} className="shadow-out-button px-2">
              {locale === "en" ? "가" : "A"}
            </div>
            {windowWidth !== null && windowWidth > 370 ? (
              <div className={`flex flex-col items-end min-w-[70px] ml-2`}>
                <span className="text-xs">
                  {windowWidth !== null && windowWidth > 450
                    ? `Copyright © ${new Date().getFullYear()}`
                    : `Copyright ©`}
                </span>
                <span className="text-xs">Arden Lee</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </footer>
  );
}
