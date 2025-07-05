import { montserrate } from "@/lib/fonts";

export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${montserrate.className} mdx-code-box`}>{children}</div>
  );
}
