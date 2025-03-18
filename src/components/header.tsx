"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  // 헤더에 들어갈 것: HOME / ARDEN? / BLOG

  const NAVLiNK = ({ title, href }: { title: string; href: string }) => {
    return (
      <Link href={href}>
        <span>{title}</span>
      </Link>
    );
  };

  return (
    <header className="fixed w-full flex max-w-screen-md px-4 justify-between py-5 z-50 bg-transparent">
      <nav className="w-full">
        <ul className="flex justify-between space-x-4">
          <div className="space-x-4">
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
