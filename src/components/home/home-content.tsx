"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useLocale } from "@/hooks/use-locale";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeIcons } from "../../lib/home-icons";
import HomeIcon from "./HomeIcon";
import { useWindowSize } from "@/hooks/use-size";
import ProgressBar from "./ProgressBar";
import WhoIsHyeono from "./WhoIsHyeono";
import HyeonosBlog from "./HyeonosBlog";

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

      {/* contents - who's hyeono / hyeono's blog */}
      <div className="flex flex-col h-full justify-center items-center relative">
        <WhoIsHyeono locale={myLocale} />
        <HyeonosBlog />
      </div>
    </section>
  );
}

export default HomeContent;
