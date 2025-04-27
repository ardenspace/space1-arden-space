"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Diameter,
  Circle,
  Cat,
  Heart,
  Github,
  LinkedinIcon,
  Twitter,
  FolderClosed,
} from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeIcon from "./HomeIcon";

gsap.registerPlugin(ScrollTrigger);

function HomeContent() {
  // 헤더 - theme changer,

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
    {
      id: 4,
      route: "/thumbnails/test-image4.jpg",
    },
    {
      id: 5,
      route: "/thumbnails/test-image5.jpg",
    },
  ];

  return (
    <section className="w-full h-full relative">
      {/* icons */}
      <HomeIcon
        ICON={Github}
        design={`bottom-[30px] right-[20px] text-[var(--ttBlack)]`}
        filename={"GitHub"}
        tolink="https://github.com/ardensgarden"
      />
      <HomeIcon
        ICON={LinkedinIcon}
        design={`bottom-[100px] right-[20px]`}
        filename={"linkedIn"}
        tolink="https://www.linkedin.com/in/ardenspace/"
      />
      <HomeIcon
        ICON={Twitter}
        design={`bottom-[200px] right-[20px]`}
        filename={"Twitter"}
        tolink="https://twitter.com/ardenspace"
      />

      {/* contents */}
      <div className="flex flex-col h-full justify-center items-center relative">
        <div className="h-[45vh] min-h-[280px] w-[70vw] min-w-[300px] max-w-[550px] bg-red-300 z-99">
          1
        </div>
        <div className="absolute top-[15vh] left-[100px] h-[30vh] min-h-[230px] w-[40vw] min-w-[300px] max-w-[350px] bg-blue-300">
          2<div>여기에!!!</div>
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
