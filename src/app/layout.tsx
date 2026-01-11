import { ZIndexProvider } from "@/contexts/ZIndexContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://ardenspace.vercel.app"
  ),
  title: {
    default: `arden'space`,
    template: `%s | arden'space`,
  },
  description:
    "Welcome to arden'space 🛸 — where I think, break, and build at my own pace 👾",
  keywords: [
    "frontend",
    "engineer",
    "developer",
    "blog",
    "tech",
    "web development",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Arden" }],
  creator: "Arden Lee",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    alternateLocale: "en_US",
    title: `arden'space | Frontend Engineer`,
    description:
      "Welcome to arden'space 🛸 — where I think, break, and build at my own pace 👾",
    url: "https://ardenspace.vercel.app",
    siteName: "arden'space",
    images: [
      {
        url: "/home/attie.png",
        width: 1200,
        height: 630,
        alt: "arden'space - Frontend Engineer Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `arden'space | Frontend Engineer`,
    description:
      "Welcome to arden'space 🛸 — where I think, break, and build at my own pace 👾",
    images: ["/home/attie.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "hjAKkwinNaIFw1pSs-o9LhA3BUtd4m3vyxzYZHgg3Rw",
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
