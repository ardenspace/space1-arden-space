import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="layout-main">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
