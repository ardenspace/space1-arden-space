import { getArdenPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageLayout from "../page-layout";
import CareerCompanyCard from "@/components/arden/CareerCompanyCard";
import EducationCard from "@/components/arden/EducationCard";

export async function generateStaticParams() {
  return [{ locale: "ko" }, { locale: "en" }];
}

const components = {
  CareerCompanyCard,
  EducationCard,
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { content } = await getArdenPostBySlug(locale, "about");

  return (
    <PageLayout>
      <div className="detail-page-layout">
        <div className="content">
          <MDXRemote source={content} components={components} />
        </div>
      </div>
    </PageLayout>
  );
}
