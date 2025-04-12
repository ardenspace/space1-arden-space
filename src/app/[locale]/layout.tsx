import { use } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <section className="page-layout">{children}</section>;
}
