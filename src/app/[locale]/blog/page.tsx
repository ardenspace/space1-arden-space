import { getMetaData } from "@/lib/posts";
import ClientBlogPage from "./ClientBlogPage";
import { Suspense } from "react";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const postsMetaData = getMetaData(locale);

  const categorized = postsMetaData.reduce((acc, post) => {
    if (!acc[post.category]) acc[post.category] = [];
    acc[post.category].push(post);
    return acc;
  }, {} as Record<string, typeof postsMetaData>);

  const categories = Object.keys(categorized);
  const selectedCategory = categories[0] || "";

  return (
    <Suspense>
      <ClientBlogPage
        categories={categories}
        categorizedPosts={categorized}
        initialCategory={selectedCategory}
      />
    </Suspense>
  );
}
