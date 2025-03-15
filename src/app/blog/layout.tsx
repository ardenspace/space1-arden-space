export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="page-layout">{children}</section>;
}
