import { play } from "@/lib/fonts";
import Footer from "@/components/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${play.className} layout-main`}>
      <div className="flex-1 overflow-auto scrollbar-hide">{children}</div>
      <Footer />
    </main>
  );
}
