import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  thumbnail: string;
};

const contentDir = path.join(process.cwd(), "src/contents");

// 메타데이터 가져오는 함수
export function getMetaData(): PostMeta[] {
  const categories = fs.readdirSync(contentDir);

  return categories.flatMap((category) => {
    const categoryDir = path.join(contentDir, category);
    const files = fs
      .readdirSync(categoryDir)
      .filter((file) => file.endsWith(".mdx"));

    return files.map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(categoryDir, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);

      return {
        ...(data as Omit<PostMeta, "category" | "slug">),
        category,
        slug,
      };
    });
  });
}

// 본문 내용까지 가져오는 함수
// export function getPostBySlug(category: string, slug: string) {
//   const filePath = path.join(contentDir, category, `${slug}.mdx`);
//   const source = fs.readFileSync(filePath, "utf8");
//   const { data, content } = matter(source);

//   return {
//     meta: {
//       ...(data as Omit<PostMeta, "category" | "slug">),
//       category,
//       slug,
//     },
//     content,
//   };
// }
