"use client";

import React, { useEffect, useState, useRef } from "react";
import { Diameter, Circle, Cat, Heart } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <section className="w-full flex justify-center items-center">
      <div className="flex w-[100%] sm:w-[60%] min-h-[300px] rounded-sm border-1 border-[var(--purple)] p-7">
        <div className="w-full border-1 border-[var(--purple)]">
          머하는 녀석이에요?
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
