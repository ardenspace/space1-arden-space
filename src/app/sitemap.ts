import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ardenspace.vercel.app';

  // 기본 페이지들
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/ko/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // 블로그 포스트 동적 생성
  const contentRoot = path.join(process.cwd(), 'src/contents/blog');
  const locales = fs.readdirSync(contentRoot);

  locales.forEach((locale) => {
    const localePath = path.join(contentRoot, locale);
    const categories = fs.readdirSync(localePath);

    categories.forEach((category) => {
      const categoryPath = path.join(localePath, category);
      const files = fs
        .readdirSync(categoryPath)
        .filter((file) => file.endsWith('.mdx'));

      files.forEach((file) => {
        const slug = file.replace(/\.mdx$/, '');
        const filePath = path.join(categoryPath, file);

        try {
          const raw = fs.readFileSync(filePath, 'utf8');
          const { data } = matter(raw);

          routes.push({
            url: `${baseUrl}/${locale}/blog/${category}/${slug}`,
            lastModified: data.date ? new Date(data.date) : new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
          });
        } catch (err) {
          console.error(`Error processing ${filePath}:`, err);
        }
      });
    });
  });

  return routes;
}
