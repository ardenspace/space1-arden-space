import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import SlugDetailPage from "@/app/blog/SlugDetailPage";

type Props = {
  params: { category: string; slug: string };
};

export default async function PostPage({ params }: Props) {
  const awaitedParams = await params;
  const { category, slug } = awaitedParams;

  try {
    const { default: MDXContent } = await import(
      `@/contents/${category}/${slug}.mdx`
    );
    return (
      <SlugDetailPage>
        <MDXContent />
      </SlugDetailPage>
    );
  } catch (error) {
    return notFound();
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaitedParams = await params;

  return {
    title: awaitedParams.slug,
  };
}

export async function generateStaticParams() {
  const contentRoot = path.join(process.cwd(), "src/contents");
  const categories = fs.readdirSync(contentRoot);

  const params = categories.flatMap((category) => {
    const categoryPath = path.join(contentRoot, category);
    const files = fs
      .readdirSync(categoryPath)
      .filter((file) => file.endsWith(".mdx"));

    return files.map((file) => ({
      category,
      slug: file.replace(/\.mdx$/, ""),
    }));
  });

  return params;
}
