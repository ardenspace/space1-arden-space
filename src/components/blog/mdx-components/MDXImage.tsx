"use client";

import { useBreakpoint } from "@/hooks/use-breakpoint";
import Image, { ImageProps } from "next/image";

export default function MDXImage(props: ImageProps) {
  const isMobile = useBreakpoint().isMobile;

  // 모바일이면 이미지 width 100%, 데스크톱이면 style로 넘어온 값 사용
  const isSmall = isMobile;

  return (
    <div className="flex justify-center my-3">
      <Image
        {...props}
        alt="for-descriptions-in-blog-posts"
        width={props.width ?? 800}
        height={props.height ?? 600}
        style={{
          ...props.style,
          width: isSmall ? "100%" : props.style?.width || "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
