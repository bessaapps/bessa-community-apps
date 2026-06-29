import { formatMetadata } from "@/lib/helpers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { stripHtml } from "string-strip-html";
import ProcessSection from "../../../components/sections/ProcessSection";
import ServicesSection from "../../../components/sections/ServicesSection";
import { bookingLink } from "@/lib/constants";
import { Service, WithContext } from "schema-dts";
import FAQSection from "../../../components/sections/FAQSection";
import { permanentRedirect } from "next/navigation";
import Section from "@/components/sections/Section";

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const response = await fetch(
    `https://cms.bessaapps.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 3600 } }
  );
  const services = await response.json();
  const service = services?.[0];

  const title = stripHtml(service.title.rendered).result;
  const excerpt = stripHtml(service.excerpt.rendered).result;

  return formatMetadata({
    metadataTitle: service?.acf?.meta_title || title,
    metadataDescription: excerpt,
    path: `/${service.slug}`,
    imagePath: service._embedded["wp:featuredmedia"][0].source_url
  });
}

export default async function ServicePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetch(
    `https://cms.bessaapps.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 3600 } }
  );
  const services = await response.json();
  const service = services?.[0];

  if (!service?.id) return permanentRedirect("/");

  const title = stripHtml(service.title.rendered).result;
  const excerpt = stripHtml(service.excerpt.rendered).result;
  const featuredMedia = service._embedded["wp:featuredmedia"][0];

  const jsonLd: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service?.acf?.meta_title || title,
    provider: {
      "@type": "Organization",
      name: "Bessa Community Apps"
    },
    areaServed: "Worldwide",
    name: service?.acf?.meta_title || title,
    image: featuredMedia.source_url,
    description: excerpt,
    url: `http://bessaapps.com/${slug}`
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <Section>
        <div className={"max-w-3xl flex flex-col gap-4 mx-auto"}>
          <p className={"text-primary uppercase"}>
            {service.acf.short_title || ""}
          </p>
          <h1 className={"text-4xl sm:text-6xl font-bold mb-4"}>{title}</h1>
          <Link
            href={bookingLink}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Button size={"lg"} className={"cursor-pointer hover:scale-110"}>
              Get Started
            </Button>
          </Link>
        </div>
      </Section>
      <Section>
        <div className={"bg-card relative aspect-[1.4] rounded-2xl"}>
          <div
            className={
              "h-full w-full max-h-full max-w-full aspect-square flex items-center justify-center p-8"
            }
          >
            <Image
              src={featuredMedia.source_url}
              height={featuredMedia.media_details.height}
              width={featuredMedia.media_details.width}
              alt={featuredMedia.alt_text}
              className={"h-full w-full object-contain"}
              sizes={"(max-width: 640px) 100vw, 1268px"}
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className={"max-w-3xl mx-auto"}>
          <div
            dangerouslySetInnerHTML={{ __html: service.content.rendered }}
            className={
              "flex flex-col gap-4 [&_strong]:text-muted-foreground [&_h2]:text-2xl [&_h3]:text-xl [&_a]:text-muted-foreground [&_a]:underline [&_ul]:list-disc [&_ul]:pl-8 [&_img]:rounded-2xl [&_blockquote]:italic [&_blockquote]:border-l-2 [&_blockquote]:sm:w-6/8 [&_blockquote]:pl-8"
            }
          />
        </div>
      </Section>
      <ServicesSection sectionHeading={"More Services"} hiddenId={service.id} />
      <ProcessSection />
      <FAQSection />
    </section>
  );
}
