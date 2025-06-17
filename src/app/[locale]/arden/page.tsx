import { getArdenPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageLayout from "../page-layout";

export default async function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const { meta, content } = getArdenPostBySlug(locale, "about");

  return (
    <PageLayout>
      <div className="detail-page-layout">
        <div className="content">
          <MDXRemote source={content} />
        </div>
      </div>
    </PageLayout>
  );
}
