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
      {children}
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  );
}
