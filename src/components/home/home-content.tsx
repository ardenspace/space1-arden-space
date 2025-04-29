"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLocale } from "@/hooks/use-locale";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeIcons } from "./home-icons";
import HomeIcon from "./HomeIcon";

gsap.registerPlugin(ScrollTrigger);

function HomeContent() {
  // 헤더 - theme changer,
  const myLocale = useLocale();

  const testList = [
    {
      id: 1,
      route: "/thumbnails/test-image.jpg",
    },
    {
      id: 2,
      route: "/thumbnails/test-image2.jpg",
    },
    {
      id: 3,
      route: "/thumbnails/test-image3.jpg",
    },
  ];

  return (
    <section className="w-full h-full relative">
      {/* icons */}
      {homeIcons.map((item, idx) => (
        <HomeIcon
          key={idx}
          ICON={item.ICON}
          design={item.design}
          filename={item.filename}
          tolink={
            item.tolink.startsWith("https")
              ? item.tolink
              : `http://localhost:3000/${myLocale}${item.tolink}`
          }
        />
      ))}

      {/* contents */}
      <div className="flex flex-col h-full justify-center items-center relative">
        <div className="h-[45vh] min-h-[300px] w-[70vw] min-w-[300px] max-w-[570px] border-2 border-[#fff] bg-[var(--bgMain)]">
          1 blog
        </div>

        {/* portfolio */}
        <div className="absolute top-[15vh] left-[100px] h-[25vh] min-h-[200px] w-[40vw] min-w-[320px] max-w-[360px] border-2 border-[#fff]">
          <div className="h-[10%] bg-[var(--ttBlack)] text-[var(--pfColor)] flex items-center px-2">
            WHO IS THIS?
          </div>
          <div className="checkerboard">
            <div className="w-[85%] h-[85%] bg-white relative overflow-hidden">
              <img
                src="/home/test.jpg"
                alt="for-home-portfolio"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
