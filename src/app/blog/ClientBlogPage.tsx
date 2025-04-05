"use client";

import CategoryMenu from "@/components/blog/CategroyMenu";
import PostsContent from "@/components/blog/PostsContent";
import { useState } from "react";

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
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const onSelectCategory = (categroyVal: string) => {
    setSelectedCategory(categroyVal);
  };

  console.log("categories---", categories);
  console.log("selectedCategory---", selectedCategory);

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
