"use client";

import { useWindowSize } from "@/hooks/use-size";
import Image, { ImageProps } from "next/image";

export default function MDXImage(props: ImageProps) {
  const { width } = useWindowSize();

  // 480px 이하면 이미지 width 100%, 이상이면 style로 넘어온 값 사용
  const isSmall = width > 0 && width < 480;

  return (
    <div className="flex justify-center my-3">
      <Image
        {...props}
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
