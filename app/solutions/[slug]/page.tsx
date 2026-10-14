import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetailTemplate } from "@/components/solutions/solution-detail-template";
import { SOLUTION_DETAILS } from "@/lib/solution-details-data";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd, faqPageJsonLd } from "@/lib/json-ld";
import { SolutionPageView } from "@/components/analytics/solution-page-view";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return Object.keys(SOLUTION_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = SOLUTION_DETAILS[slug];
  if (!data) return {};
  return {
    title: data.metaTitle ?? data.pageName,
    ...pageMetadata({
      title: data.metaTitle ?? data.pageName,
      description: data.metaDescription ?? data.heroDesc,
      path: `/solutions/${slug}`,
      image: data.heroImage,
    }),
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = SOLUTION_DETAILS[slug];
  if (!data) notFound();

  return (
    <>
      <SolutionPageView slug={slug} pageName={data.pageName} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: data.pageName, path: `/solutions/${slug}` },
        ])}
      />
      <JsonLd data={serviceJsonLd({ slug, name: data.pageName, description: data.metaDescription ?? data.heroDesc })} />
      <JsonLd data={faqPageJsonLd(data.faqItems)} />
      <SolutionDetailTemplate data={data} />
    </>
  );
}
