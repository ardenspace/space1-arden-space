"use client";

import Header from "@/components/header";
import useIsHome from "@/hooks/use-is-home";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isHome = useIsHome();

  return (
    <main
      className={`flex justify-center ${isHome ? "" : "bg-[var(--bgMain)]"}`}
    >
      <Header />
      <section className="page-layout">{children}</section>
    </main>
  );
}
