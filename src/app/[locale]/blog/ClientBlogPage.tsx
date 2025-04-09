"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import CategoryMenu from "@/components/blog/CategroyMenu";
import PostsContent from "@/components/blog/PostsContent";

export interface Post {
  title: string;
  description: string;
  category: string;
  slug: string;
  date: string;
  thumbnail: string;
}

export interface PostProps {
  categories: string[];
  categorizedPosts: Record<string, Post[]>;
  initialCategory: string;
}

const ClientBlogPage = ({
  categories,
  categorizedPosts,
  initialCategory,
}: PostProps) => {
  const searchParams = useSearchParams();
  const fromCategory = searchParams.get("fc");
  const [selectedCategory, setSelectedCategory] = useState(
    fromCategory || initialCategory
  );

  const onSelectCategory = (categroyVal: string) => {
    setSelectedCategory(categroyVal);
  };

  return (
    <section className="flex flex-col">
      <CategoryMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <PostsContent posts={categorizedPosts[selectedCategory] || []} />
    </section>
  );
};

export default ClientBlogPage;
