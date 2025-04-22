"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Reply } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import PageLayout from "@/components/page-layout";

type Props = {
  children: React.ReactNode;
  frontmatter: {
    title: string;
    description: string;
    date: string;
  };
};

export default function SlugDetailPage({ children, frontmatter }: Props) {
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const fromCategory = searchParams.get("fc");

  const onHandleBack = () => {
    if (fromCategory) {
      router.push(`/${locale}/blog?fc=${fromCategory}`);
    } else {
      router.back();
    }
  };

  console.log("frontmatter", frontmatter);

  return (
    <PageLayout>
      <div className="sticky-div">
        <div className="flex items-center border-t-3 border-b-3 border-[var(--bgSecond)] h-10">
          <div
            className="flex items-center cursor-pointer px-5"
            onClick={onHandleBack}
          >
            <Reply size={24} color="var(--ttBlack)" />
            <span className="ml-2 text-xs font-bold mt-1">
              C:\Blog\{fromCategory ? fromCategory : ""}
            </span>
          </div>
        </div>
      </div>

      <div className="detail-page-layout">
        <div className="title-box">
          <p className="title">{frontmatter.title}</p>
          <p className="description">{frontmatter.description}</p>
          <div className="date">
            <div>{frontmatter.date}</div>
          </div>
        </div>
        {children}
      </div>
    </PageLayout>
  );
}
