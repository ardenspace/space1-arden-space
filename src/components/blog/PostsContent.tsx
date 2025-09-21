"use client";

import type { Post } from "@/app/[locale]/blog/ClientBlogPage";
import { useLocale } from "@/hooks/use-locale";
import { Cat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

interface PostContentProps {
  posts?: Post[];
}
const PostsContent: React.FC<PostContentProps> = memo(({ posts = [] }) => {
  const locale = useLocale();

  return (
    <section className="flex flex-col pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 px-1 sm:px-4 gap-8">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="shadow-[2px_2px_1px_var(--bgSecond)] p-[2px] hover:scale-103 rounded-sm hover:cursor-pointer"
          >
            <Link
              href={`/${locale}/blog/${post.category}/${post.slug}?fc=${post.category}`}
            >
              <div className="flex items-center justify-between px-2 pr-1 h-6 mb-1 bg-[#e8e8e8] border-1 border-[var(--bgSecond)] rounded-xs">
                <span className="text-sm text-ttBlack">{post.date}</span>
                <div className="flex items-center justify-center text-ttBlack">
                  <Cat size={18} />
                </div>
              </div>
              <div className="flex flex-col pt-2 pb-4 px-1 bg-[#e8e8e8] border-1 border-[var(--bgSecond)] rounded-xs">
                <div className="flex justify-center h-[200px] border-t border-l border-3 border-[var(--bgWhite)] shadow-[-2px_-2px_1px_var(--bgSecond)]">
                  <Image
                    width={270}
                    height={150}
                    src={post.thumbnail}
                    alt={post.title}
                    className="object-fill w-full h-full bg-[var(--bgWhite)]"
                    priority={idx < 6} // 첫 6개 이미지만 우선 로딩
                  />
                </div>
                <div className="px-1">
                  <div className="pt-4 font-bold text-base leading-6 line-clamp-1 break-keep">
                    {post.title}
                  </div>
                  <div
                    className="pt-1 text-sm tracking-tight line-clamp-2"
                    style={{ minHeight: "3em" }}
                  >
                    {post.description}
                  </div>
                  <div className="shadow-out-button mt-3 tracking-[0.6em] text-base">
                    play now!
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
});

PostsContent.displayName = "PostsContent";

export default PostsContent;
