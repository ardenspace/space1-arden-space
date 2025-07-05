"use client";

import { MDXProvider } from "@mdx-js/react";
import HomeContent from "@/components/home/home-content";

export default function Home() {
  return (
    <MDXProvider>
      <div className="flex-1 overflow-auto scrollbar-hide">
        <section className="home-section">
          <HomeContent />
        </section>
      </div>
    </MDXProvider>
  );
}
