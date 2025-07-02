import type { Metadata } from "next";
import { ZIndexProvider } from "@/contexts/ZIndexContext";
import "./globals.css";

export const metadata: Metadata = {
  title: `arden'space`,
  description:
    "Loves to build things in my space🛸 Currently building things with Next.js, TypeScript, and Tailwind CSS",
  openGraph: {
    title: `arden'space | Frontend Engineer`,
    description:
      "Loves to build things in my space🛸 Currently building things with Next.js, TypeScript, and Tailwind CSS",
    url: "https://ardenspace.vercel.app",
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
    <html lang="ko">
      <body className="layout-body">
        <ZIndexProvider>{children}</ZIndexProvider>
      </body>
    </html>
  );
}
