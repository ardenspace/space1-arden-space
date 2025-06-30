"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import useIsHome from "@/hooks/use-is-home";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useLocale } from "@/hooks/use-locale";
import { useWindowSize } from "@/hooks/use-size";
import { useZIndex } from "@/contexts/ZIndexContext";

export default function Footer() {
  const { currentPosition, setCurrentPosition } = useZIndex();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const locale = useLocale();
  const isHome = useIsHome();
  const size = useWindowSize();

  if (!size) return null;

  // 한<->영 함수
  const onSwitchLanguages = () => {
    const fromCategory = searchParams.get("fc");
    const newLocale = locale === "ko" ? "en" : "ko";
    segments[1] = newLocale;
    let newPath = segments.join("/");

    if (fromCategory) {
      newPath += `?fc=${fromCategory}`;
    }
    router.push(newPath);
  };

  // url 함수
  const onClickSendUrl = (type: "blog" | "port") => {
    setCurrentPosition(type);

    if (segments.length > 2) {
      const targetPath =
        type === "blog" ? `/${locale}/blog` : `/${locale}/arden`;
      router.push(targetPath);
    }
  };

  return (
    <footer
      className={`fixed bottom-0 w-full flex justify-center ${
        isHome ? "" : "bg-[var(--bgMain)]"
      }`}
    >
      <section
        className={`w-full h-[40px] bg-[var(--footerBg)] border-2 border-[var(--bgWhite)] ${
          isHome ? "max-w-screen-lg" : "max-w-screen-md"
        }`}
      >
        <div
          className={`w-full h-full flex items-center justify-between ${
            size.width > 400 ? "px-3" : "px-1"
          }`}
        >
          <div className="flex items-center text-[var(--ttBlack)] text-sm">
            <span className="shadow-out-button px-1 mr-2">
              <Link href="https://github.com/ardenspace" target="_blank">
                <Github size={21} color={`var(--ttBlack)`} />
              </Link>
            </span>

            <span
              className={`${
                currentPosition === "blog"
                  ? "shadow-in-button"
                  : "shadow-out-button"
              } min-w-[90px] px-2`}
              onClick={() => onClickSendUrl("blog")}
            >
              ARDEN&apos;s
            </span>

            <span
              className={`${
                currentPosition === "port"
                  ? "shadow-in-button"
                  : "shadow-out-button"
              } min-w-[80px]`}
              onClick={() => onClickSendUrl("port")}
            >
              WHO IS
            </span>
          </div>

          <div className="flex items-center text-[var(--ttBlack)] text-lg">
            <div onClick={onSwitchLanguages} className="shadow-out-button px-2">
              {locale === "en" ? "가" : "A"}
            </div>
            {size.width > 370 ? (
              <div className={`flex flex-col items-end min-w-[70px] ml-2`}>
                <span className="text-xs">
                  {size.width > 450
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
