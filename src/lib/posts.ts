import fs from "fs/promises";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface Post {
  title: string;
  description: string;
  category: string;
  date: string;
  thumbnail: string;
  slug: string;
}

export async function getPosts(): Promise<Post[]> {
  try {
    const categories = await fs.readdir(BLOG_DIR);
    let posts: Post[] = [];

    for (const category of categories) {
      const categoryPath = path.join(BLOG_DIR, category);
      const files = await fs.readdir(categoryPath);

      for (const file of files) {
        if (!file.endsWith(".mdx")) continue;

        const slug = file.replace(".mdx", "");
        const filePath = path.join(categoryPath, file);
        const fileContent = await fs.readFile(filePath, "utf-8");

        // 메타데이터 추출 (MDX 파일의 frontmatter 부분에서 가져옴)
        const metadataMatch = fileContent.match(
          /export const metadata = ({[\s\S]*?})/
        );
        const metadata = metadataMatch ? eval(`(${metadataMatch[1]})`) : {}; // ⚠️ eval 사용 (보안 주의)

        posts.push({
          title: metadata.title || slug,
          description: metadata.description || "",
          category,
          date: metadata.date || "",
          thumbnail: metadata.thumbnail || "",
          slug,
        });
      }
    }

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
