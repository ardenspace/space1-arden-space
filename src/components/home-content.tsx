"use client";

import React, { useEffect, useState, useRef } from "react";
import { Diameter, Circle, Cat, Heart } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HomeContent() {
  // 헤더 - theme changer,
  const animatedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animatedRef.current) return;

    const totalWidth = animatedRef.current.scrollWidth / 2;

    const ctx = gsap.context(() => {
      gsap.to(animatedRef.current, {
        x: `-${totalWidth}px`,
        duration: 20,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`,
        },
      });

      gsap.to(animatedRef.current, {
        x: `-${totalWidth}px`,
        scrollTrigger: {
          trigger: animatedRef.current,
          start: "left left",
          end: "right left",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            if (self.progress === 1) {
              gsap.set(animatedRef.current, { x: `-${totalWidth}px` });
            }

            if (self.progress === 0) {
              gsap.set(animatedRef.current, { x: "0px" });
            }
          },
        },
      });
    });

    return () => ctx.revert();
  }, []);

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
    <section className="w-full flex flex-col justify-center items-center">
      <div className="flex w-[90%] md:w-[80%] min-h-[250px] rounded-sm border-1 border-[var(--purple)] overflow-x-auto scrollbar">
        <div ref={animatedRef} className="flex w-max">
          {[...testList, ...testList].map((el, idx) => (
            <div
              key={`${el.id}_${idx}`}
              className="min-w-[300px] h-[250px] bg-bgWhite"
            >
              {/* <Image
                unoptimized
                width={300}
                height={200}
                src={el.route}
                alt={`home animation`}
                className="child-image"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
