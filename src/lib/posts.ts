import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  category: string;
  slug: string;
  locale: string;
};

const contentDir = path.join(process.cwd(), "src/contents/blog");

// 메타데이터 가져오는 함수
export function getMetaData(locale: string): PostMeta[] {
  const localeDir = path.join(contentDir, locale);

  if (!fs.existsSync(localeDir)) return [];

  const categories = fs.readdirSync(localeDir);

  return categories.flatMap((category) => {
    const categoryDir = path.join(localeDir, category);
    const files = fs
      .readdirSync(categoryDir)
      .filter((file) => file.endsWith(".mdx"));

    return files.map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(categoryDir, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);

      return {
        ...(data as Omit<PostMeta, "category" | "slug" | "locale">),
        locale,
        category,
        slug,
      };
    });
  });
}

// 본문 내용까지 가져오는 함수
export function getHyeonoPostBySlug(locale: string, slug: string) {
  const filePath = path.join(
    process.cwd(),
    "src/contents/hyeono",
    locale,
    `${slug}.mdx`
  );
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    meta: {
      ...(data as Omit<PostMeta, "category" | "slug">),
      category: "",
      slug,
      locale,
    },
    content,
  };
}
