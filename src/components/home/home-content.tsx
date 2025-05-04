"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useLocale } from "@/hooks/use-locale";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeIcons } from "./home-icons";
import HomeIcon from "./HomeIcon";
import { useWindowSize } from "@/hooks/use-size";
import ProgressBar from "./ProgressBar";
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
              : `http://localhost:3000/${myLocale}${item.tolink}`
          }
        />
      ))}

      {/* contents - who's arden / arden's blog */}
      <div className="flex flex-col h-full justify-center items-center relative">
        <WhoIsArden locale={myLocale} />
        <ArdensBlog />
      </div>
    </section>
  );
}

export default HomeContent;
