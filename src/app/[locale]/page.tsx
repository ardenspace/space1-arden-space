"use client";

import { MDXProvider } from "@mdx-js/react";
import HomeContent from "@/components/home/home-content";

export default function Home() {
  return (
    <MDXProvider>
      <section className="home-section">
        <HomeContent />
      </section>
    </MDXProvider>
  );
}
