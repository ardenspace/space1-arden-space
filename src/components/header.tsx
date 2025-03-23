"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { Cat } from "lucide-react";

export default function Header() {
  const icons = [1, 2, 3];
  const pathname = usePathname();
  const styles: { [key: string]: { bg: string; text: string } } = {
    "/": { bg: "bg-[#BFFEB8]", text: "text-[#7448ff]" },
    "/blog": { bg: "bg-[#fdcef7]", text: "text-[#23C4AF]" },
    "/about": { bg: "bg-[#aa9ced]", text: "text-[#ECE7D4]" },
  };
  const currentStyle = styles[pathname] || {
    bg: "bg-[#bcfe4a]",
    text: "text-[#7448FF]",
  };

  const NAVLiNK = ({ title, href }: { title: string; href: string }) => {
    const isActive = pathname === href;

    return (
      <Link href={href}>
        <span
          className={`tab-item-layout ${
            isActive
              ? "bg-bgMain text-[var(--bgSecond)] font-bold"
              : "bg-bgSecond text-[var(--bgWhite)] font-light"
          }`}
        >
          {title}
        </span>
      </Link>
    );
  };

  return (
    <header className="fixed w-full flex max-w-screen-md z-50 bg-bgMain border-3 border-t-[var(--bgWhite)] border-r-[var(--bgWhite)] border-l-[var(--bgWhite)] border-b-0">
      <nav className="w-full border-b-3 border-b-[var(--bgSecond)]">
        <div
          className={`w-full flex items-center justify-between px-5 h-10 border-bgSecond ${currentStyle.bg}`}
        >
          <span className={`font-bold text-md ${currentStyle.text}`}>
            Hello, arden'space!
          </span>
          <div className="flex">
            {icons.map((_, index) => (
              <div
                key={index}
                className={`flex items-center justify-center h-6 w-6 ml-1 rounded-2 border-2 ${currentStyle.text}`}
              >
                <Cat size={19} className={`${currentStyle.text}`} />
              </div>
            ))}
          </div>
        </div>

        <ul className="flex justify-between mt-13 px-4">
          <div>
            <NAVLiNK title="Home" href="/" />
            <NAVLiNK title="Blog" href="/blog" />
          </div>
          <div>
            <NAVLiNK title="Arden" href="/about" />
          </div>
        </ul>
      </nav>
    </header>
  );
}
