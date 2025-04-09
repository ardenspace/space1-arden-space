import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import SlugDetailPage from "@/app/[locale]/blog/SlugDetailPage";

type Props = {
  params: { locale: string; category: string; slug: string };
};

export default async function PostPage({ params }: Props) {
  const awaitedParams = await params;
  const { locale, category, slug } = awaitedParams;

  try {
    const { default: MDXContent } = await import(
      `@/contents/${locale}/${category}/${slug}.mdx`
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
  const contentRoot = path.join(process.cwd(), `src/contents`);
  const locales = fs.readdirSync(contentRoot);

  const params = locales.flatMap((locale) => {
    const localePath = path.join(contentRoot, locale);
    const categories = fs.readdirSync(localePath);

    return categories.flatMap((category) => {
      const categoryPath = path.join(localePath, category);
      const files = fs
        .readdirSync(categoryPath)
        .filter((file) => file.endsWith(".mdx"));

      return files.map((file) => ({
        locale,
        category,
        slug: file.replace(/\.mdx$/, ""),
      }));
    });
  });

  return params;
}
