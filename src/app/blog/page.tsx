"use client";

import { useEffect, useState } from "react";
import { getCategories } from "@/lib/categories";
import { getPosts, Post } from "@/lib/posts";
import PostsContent from "@/components/blog/PostsContent";
import CategoryMenu from "@/components/blog/CategroyMenu";

interface PostsCategory {
  [category: string]: Post[];
}

export default function BlogPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categorizedPosts, setCategorizedPosts] = useState<PostsCategory>({});

  useEffect(() => {
    async function fetchData() {
      const fetchedCategories = await getCategories();
      const fetchedPosts = await getPosts();

      setCategories(fetchedCategories);
      setSelectedCategory(fetchedCategories[0] || "");

      // 카테고리별로 포스트 정리
      const categorized = fetchedPosts.reduce(
        (acc: PostsCategory, post: Post) => {
          const { category } = post;
          if (!acc[category]) acc[category] = [];
          acc[category].push(post);
          return acc;
        },
        {}
      );

      setCategorizedPosts(categorized);
    }

    fetchData();
  }, []);

  return (
    <section className="flex flex-col overflow-visible">
      <CategoryMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <PostsContent posts={categorizedPosts[selectedCategory] || []} />
    </section>
  );
}
