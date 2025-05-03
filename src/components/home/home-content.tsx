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

      {/* blog contents */}
      <div className="flex flex-col h-full justify-center items-center relative">
        <div className="mini-main">
          <div className="stripe-background header">
            <span className="bg-[var(--footerBg)] px-2">
              HELLO, ARDEN'SPACE!
            </span>
          </div>
          <div className="h-[91.5%] w-full">
            <div className="flex flex-wrap w-full h-full pt-[5px] pb-[5px]">
              <div className="mini-body">
                <span>What I've done?</span>
              </div>
              <div className="mini-body border-l border-[var(--blackTt)] relative">
                <div className="absolute bottom-0 right-0 w-[35%] h-[35%] min-h-[120px]">
                  <img
                    src="/home/attie.png"
                    alt="display-for-home"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>

                <span>What's next??</span>
                <div className="h-[65%] flex flex-col border">
                  <ProgressBar />
                </div>
              </div>
            </div>
          </div>
          <div className="stripe-background bottom"></div>
          {/* <div>
            <div>welcome to arden'space</div>
            <div>최신 게시글</div>
            <div>현재 진행 중인 프로젝트 + 프로그래스 바</div>
          </div> */}
        </div>

        {/* portfolio */}
        <div className="absolute top-[15vh] left-[100px] h-[25vh] min-h-[200px] w-[40vw] min-w-[320px] max-w-[360px] border-2 border-[#fff] transition-transform duration-200 hover:scale-103">
          <div className="h-[10%] bg-[var(--ttBlack)] text-[var(--pfColor)] flex items-center px-2 border-b-2 border-[#fff]">
            WHO IS THIS?
          </div>
          <div className="checkerboard">
            <div className="w-[85%] h-[85%] bg-white relative overflow-hidden rotate-[10deg] cursor-pointer">
              <Link href={`http://localhost:3000/${myLocale}/arden`}>
                <img
                  src="/home/test.jpg"
                  alt="for-home-portfolio"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
