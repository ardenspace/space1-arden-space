import Header from "@/components/header";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center">
      <Header />
      <section className="page-layout">{children}</section>
    </main>
  );
}
