import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { play } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "arden'space",
  description:
    "Loves to build things in my space🛸 Currently building things with Next.js, TypeScript, and Tailwind CSS",
  openGraph: {
    title: "arden'space | Frontend Engineer",
    description:
      "Loves to build things in my space🛸 Currently building things with Next.js, TypeScript, and Tailwind CSS",
    url: "https://arden.space",
    siteName: "arden'space",
    // locale: 'en_GB',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${play.className} layout-body`}>
        <main className="layout-main">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
