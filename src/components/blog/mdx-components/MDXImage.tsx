"use client";

import Image, { ImageProps } from "next/image";

export default function MDXImage(props: ImageProps) {
  return (
    <div className="flex justify-center my-3">
      <Image
        {...props}
        width={props.width ?? 800}
        height={props.height ?? 600}
        style={{
          width: "100%",
          height: "auto",
          ...props.style,
        }}
      />
    </div>
  );
}
