import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import SlugDetailPage from "@/app/[locale]/blog/SlugDetailPage";

type Props = {
  params: { locale: string; category: string; slug: string };
};
interface Frontmatter {
  title: string;
  description: string;
  date: string;
}

export default async function PostPage({ params }: Props) {
  const awaitedParams = await params;
  const { locale, category, slug } = awaitedParams;

  try {
    const filePath = path.join(
      process.cwd(),
      "src/contents",
      locale,
      category,
      `${slug}.mdx`
    );

    const raw = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(raw);
    const frontmatter = data as Frontmatter;

    return (
      <SlugDetailPage frontmatter={frontmatter}>
        <MDXRemote source={content} />
      </SlugDetailPage>
    );
  } catch (err) {
    console.error("MDX 처리 중 오류:", err);
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
