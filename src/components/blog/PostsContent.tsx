"use client";

import type { Post } from "@/app/[locale]/blog/ClientBlogPage";
import Link from "next/link";
import { useLocale } from "@/hooks/use-locale";
import Image from "next/image";
import { Dog } from "lucide-react";

interface PostContentProps {
  posts?: Post[];
}
const PostsContent: React.FC<PostContentProps> = ({ posts = [] }) => {
  const locale = useLocale();

  return (
    <section className="flex flex-col pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 gap-8 px-1 sm:px-4">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="shadow-[2px_2px_2px_rgba(0,0,0,0.2)] p-[2px] hover:scale-102 rounded-sm hover:cursor-pointer"
          >
            <Link
              href={`/${locale}/blog/${post.category}/${post.slug}?fc=${post.category}`}
            >
              <div className="flex items-center justify-between px-2 pr-1 bg-[var(--postHd)] h-6">
                <span className="text-white font-bold text-sm">
                  {post.date}
                </span>
                <div className="flex items-center justify-center h-4 w-4 bg-bgWhite">
                  <Dog size={18} />
                </div>
              </div>
              <div className="flex flex-col bg-[#fff5fc] pt-4 px-3 pb-4">
                <div className="flex justify-center h-[150px] border-t border-l border-3 border-[var(--bgWhite)] shadow-[-2px_-2px_1px_rgba(35,196,175,0.7)]">
                  <Image
                    unoptimized
                    width={270}
                    height={150}
                    src={post.thumbnail}
                    alt={post.title}
                    className="object-contain w-full h-full bg-[var(--bgWhite)]"
                  />
                </div>
                <div className="pt-5 font-bold text-lg leading-6 line-clamp-1 break-keep">
                  {post.title}
                </div>
                <div
                  className="pt-1 text-sm tracking-tight line-clamp-1"
                  // style={{ minHeight: "3.3em" }}
                  style={{ minHeight: "2em" }}
                >
                  {post.description}
                </div>
                <div className="w-full flex items-center justify-center border-b border-r border-3 border-[var(--bgWhite)] h-8 shadow-[2px_2px_1px_rgba(35,196,175,0.7)] mt-3 rounded-xs tracking-[0.5em]">
                  play now!
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostsContent;
