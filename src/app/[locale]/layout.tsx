import { play } from "@/lib/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${play.className} layout-main`}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
