import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className="max-w-screen-md min-w-[320px] mx-auto transition-colors ease-in-out duration-200 dark:bg-black">
        <main className="flex flex-col w-full h-full">{children}</main>
      </body>
    </html>
  );
}
