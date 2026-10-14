import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetailTemplate } from "@/components/solutions/solution-detail-template";
import { SOLUTION_DETAILS } from "@/lib/solution-details-data";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd, faqPageJsonLd } from "@/lib/json-ld";
import { SolutionPageView } from "@/components/analytics/solution-page-view";

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
  const title = data.metaTitle ?? data.pageName;
  const description = data.metaDescription ?? data.heroDesc;
  return {
    title,
    description,
    alternates: { canonical: `/solutions/${slug}` },
    openGraph: {
      title,
      description,
      images: [
        {
          url: data.heroImage.src,
          width: data.heroImage.width,
          height: data.heroImage.height,
          alt: data.heroImage.alt,
        },
      ],
    },
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
