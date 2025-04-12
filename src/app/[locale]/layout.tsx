import { use } from "react";
import { LocalProvider } from "@/context/locale-context";

export default function AppLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  return (
    <LocalProvider locale={locale}>
      <section className="page-layout">{children}</section>
    </LocalProvider>
  );
}
