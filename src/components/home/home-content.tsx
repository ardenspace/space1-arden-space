"use client";

import React from "react";
import { useLocale } from "@/hooks/use-locale";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeIcons } from "../../lib/home-icons";
import HomeIcon from "./HomeIcon";
import { useWindowSize } from "@/hooks/use-size";
import WhoIsArden from "./WhoIsArden";
import ArdensBlog from "./ArdensBlog";

gsap.registerPlugin(ScrollTrigger);

function HomeContent() {
  // 헤더 - theme changer,
  const myLocale = useLocale();
  const size = useWindowSize();
  if (!size) return null;

  return (
    <section className="w-full h-full relative">
      {/* icons */}
      {homeIcons.map((item, idx) => (
        <HomeIcon
          key={idx}
          ICON={item.ICON}
          design={item.design}
          filename={item.filename}
          size={item.size}
          tolink={
            item.tolink.startsWith("https")
              ? item.tolink
              : `/${myLocale}${item.tolink}`
          }
        />
      ))}

      {/* contents - who's arden / arden's blog */}
      <div className="flex flex-col h-full justify-center items-center relative">
        <WhoIsArden locale={myLocale} />
        <ArdensBlog locale={myLocale} />
      </div>
    </section>
  );
}

export default HomeContent;
