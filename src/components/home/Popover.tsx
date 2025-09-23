"use client";

import { attieFont } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Popover() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="absolute bottom-0 right-0 w-[30%] h-[auto] min-h-[100px]"
        onClick={() => setOpen(!open)}
      >
        <Image
          src="/home/attie.png"
          alt="attie-on-the-home"
          fill
          className="object-contain"
        />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 z-50">
          {/* 투명 브리지 */}
          <div className="absolute -top-2 left-0 right-0 h-2"></div>

          <div className="relative w-45 rounded-lg bg-[var(--ttBlack)] shadow-lg px-3 py-1">
            <p
              className={`text-center text-lg text-[#d7cdf5] leading-tight ${attieFont.className}`}
            >
              I Came From Her{" "}
              <Link
                href="https://94lfnv.github.io/test1_about_me/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Hello, world! Page
              </Link>
              🐾
            </p>

            {/* 삼각형 꼬리 */}
            <div
              className="absolute -top-2 right-5 
            w-2 h-2
            border-l-6 border-l-transparent
            border-r-6 border-r-transparent
            border-b-6 border-b-[var(--ttBlack)]"
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
