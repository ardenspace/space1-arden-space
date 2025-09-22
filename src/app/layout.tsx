import { ZIndexProvider } from "@/contexts/ZIndexContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: `arden'space`,
  description:
    "Welcome to arden'space 🛸 — where I think, break, and build at my own pace 👾",
  openGraph: {
    title: `arden'space | Frontend Engineer`,
    description:
      "Welcome to arden'space 🛸 — where I think, break, and build at my own pace 👾",
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
