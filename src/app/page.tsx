"use client";

import { MDXProvider } from "@mdx-js/react";
import HomeContent from "../components/home-content";

export default function Home() {
  return (
    <MDXProvider>
      <section className="home-section pt-30">
        <HomeContent />
      </section>
    </MDXProvider>
  );
}
