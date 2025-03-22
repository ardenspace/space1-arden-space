"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { Cat } from "lucide-react";

export default function Header() {
  const icons = [1, 2, 3];
  const pathname = usePathname();

  const NAVLiNK = ({ title, href }: { title: string; href: string }) => {
    const isActive = pathname === href;

    return (
      <Link href={href}>
        <span
          className={`tab-item-layout ${
            isActive
              ? "bg-bgMain text-[#AAAAAA] font-bold"
              : "bg-bgSecond text-[#FEFEFE] font-light"
          }`}
        >
          {title}
        </span>
      </Link>
    );
  };

  return (
    <header className="fixed w-full flex max-w-screen-md z-9 bg-bgMain border-3 border-t-[#FEFEFE] border-r-[#FEFEFE] border-l-[#FEFEFE] border-b-3 border-b-[#AAAAAA]">
      <nav className="w-full">
        <div className="w-full flex items-center justify-between px-5 bg-bgHello h-10 border-bgSecond">
          <span className="text-white font-bold text-sm">
            Hello, arden'space!
          </span>
          <div className="flex">
            {icons.map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-6 w-6 bg-bgWhite ml-1 rounded-[2px]"
              >
                <Cat size={19} />
              </div>
            ))}
          </div>
        </div>

        <ul className="flex justify-between mt-15 px-4">
          <div className="">
            <NAVLiNK title="Home" href="/" />
            <NAVLiNK title="Blog" href="/blog" />
          </div>
          <div className="ml-auto">
            <NAVLiNK title="Arden" href="/about" />
          </div>
        </ul>
      </nav>
    </header>
  );
}
