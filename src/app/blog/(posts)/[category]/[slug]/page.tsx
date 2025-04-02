import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { category: string; slug: string };
};

export default async function PostPage({ params }: Props) {
  const { category, slug } = params;

  try {
    const Post = (await import(`@/content/blog/${category}/${slug}.mdx`))
      .default;
    return (
      <article>
        <Post />
      </article>
    );
  } catch (error) {
    return notFound();
  }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: params.slug,
  };
}
