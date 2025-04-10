import { LocalProvider } from "@/context/locale-context";

export default async function AppLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <LocalProvider locale={params.locale}>
      <section className="page-layout">{children}</section>
    </LocalProvider>
  );
}
