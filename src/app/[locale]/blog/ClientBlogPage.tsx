"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import CategoryMenu from "@/components/blog/CategroyMenu";
import PostsContent from "@/components/blog/PostsContent";
import PageLayout from "@/app/[locale]/page-layout";

export interface Post {
  title: string;
  description: string;
  category: string;
  slug: string;
  date: string;
  thumbnail: string;
  locale: string;
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
    <PageLayout>
      <section>
        <CategoryMenu
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
        <PostsContent posts={categorizedPosts[selectedCategory] || []} />
      </section>
    </PageLayout>
  );
};

export default ClientBlogPage;
