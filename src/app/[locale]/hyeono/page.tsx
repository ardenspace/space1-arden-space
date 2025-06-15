import { getHyeonoPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageLayout from "../page-layout";

export default async function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const { meta, content } = getHyeonoPostBySlug(locale, "about");

  return (
    <PageLayout>
      <section>
        <MDXRemote source={content} />
      </section>
    </PageLayout>
  );
}
