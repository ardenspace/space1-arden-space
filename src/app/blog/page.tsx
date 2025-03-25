"use client";

import { useEffect, useState } from "react";
import { allPosts, Post } from "@/contentlayer/generated";
import PostsContent from "@/components/blog/PostsContent";
import { Folder, FolderClosed } from "lucide-react";
import CategoryMenu from "@/components/blog/CategroyMenu";

export interface CategoryPost {
  title: string;
  description: string;
  category: string;
  date: string;
  thumbnail: string;
}
interface PostsCategory {
  [category: string]: CategoryPost[];
}

export default function BlogPage() {
  const [categorizedPosts, setCategorizedPosts] = useState<PostsCategory>({});
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (allPosts.length === 0) return;

    const categorized = allPosts.reduce((acc: PostsCategory, post: Post) => {
      const { category } = post;
      if (!acc[category]) acc[category] = [];
      acc[category].push(post);
      return acc;
    }, {});

    // 카테고리 별로 정리
    setCategorizedPosts(categorized);
    // 첫번째 카테고리로 초기값 지정
    setSelectedCategory(Object.keys(categorized)[0] || "");
  }, [allPosts]);

  return (
    <section className="flex flex-col overflow-visible">
      <CategoryMenu
        categories={Object.keys(categorizedPosts)}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <PostsContent posts={categorizedPosts[selectedCategory] || []} />
    </section>
  );
}
