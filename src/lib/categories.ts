import fs from "fs/promises";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export async function getCategories(): Promise<string[]> {
  try {
    const categories = await fs.readdir(BLOG_DIR);
    return categories.filter(async (category) => {
      const categoryPath = path.join(BLOG_DIR, category);
      const stat = await fs.stat(categoryPath);
      return stat.isDirectory(); // 폴더(카테고리)만 필터링
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
