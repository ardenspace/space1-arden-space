import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import SlugDetailPage from "@/app/[locale]/blog/SlugDetailPage";
import { Suspense } from "react";
import MDXImage from "@/components/blog/mdx-components/MDXImage";
import CodeBlock from "@/components/blog/mdx-components/CodeBlock";

type Props = {
  params: Promise<{
    locale: string;
    category: string;
    slug: string;
  }>;
};
interface Frontmatter {
  title: string;
  description: string;
  date: string;
}

// 블로그 mdx에 들어갈 컴포넌트
const components = {
  MDXImage,
  CodeBlock,
};

export default async function PostPage({ params }: Props) {
  const awaitedParams = await params;
  const { locale, category, slug } = awaitedParams;

  try {
    const filePath = path.join(
      process.cwd(),
      "src/contents/blog",
      locale,
      category,
      `${slug}.mdx`
    );

    const raw = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(raw);
    const frontmatter = data as Frontmatter;

    return (
      <Suspense>
        <SlugDetailPage frontmatter={frontmatter}>
          <MDXRemote source={content} components={components} />
        </SlugDetailPage>
      </Suspense>
    );
  } catch (err) {
    console.error("MDX 처리 중 오류:", err);
    return notFound();
  }
}

// 정적 생성할 때 경로 알려주는 함수
export async function generateStaticParams() {
  const contentRoot = path.join(process.cwd(), `src/contents/blog`);
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

// 각각의 페이지 제목을 게시글 제목으로 바꿔주는 함수
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaitedParams = await params;
  const { locale, category, slug } = awaitedParams;

  try {
    const filePath = path.join(
      process.cwd(),
      "src/contents/blog",
      locale,
      category,
      `${slug}.mdx`
    );

    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);
    const frontmatter = data as Frontmatter;

    return {
      title: frontmatter.title,
      description: frontmatter.description,
    };
  } catch (err) {
    console.error("generateMetadata 오류:", err);
    return {
      title: slug,
    };
  }
}
