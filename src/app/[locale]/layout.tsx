import { play, montserrate } from "@/lib/fonts";
import Footer from "@/components/footer";
import { Suspense } from "react";

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${play.className} ${montserrate.variable} layout-main`}>
      <div className="flex-1 overflow-auto scrollbar-hide">{children}</div>
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  );
}
