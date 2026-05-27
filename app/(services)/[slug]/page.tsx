import { formatMetadata } from "@/lib/helpers";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { stripHtml } from "string-strip-html";
import Process from "@/components/Process";
import ServicesSection from "@/components/ServicesSection";
import { bookingLink } from "@/lib/constants";
import { Service, WithContext } from "schema-dts";
import BlurInText from "@/components/BlurInText";
import { permanentRedirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import FAQ from "@/components/FAQ";

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await axios
    .get(`https://cms.bessaapps.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    .then((response) => response.data?.[0])
    .catch((error) => console.error(error));

  const title = stripHtml(post.title.rendered).result;
  const excerpt = stripHtml(post.excerpt.rendered).result;

  return formatMetadata({
    metadataTitle: title,
    metadataDescription: excerpt,
    path: `/${post.slug}`,
    imagePath: post._embedded["wp:featuredmedia"][0].source_url
  });
}

export default async function ServicePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await axios
    .get(`https://cms.bessaapps.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    .then((response) => response.data?.[0])
    .catch((error) => console.error(error));

  if (!post?.id) return permanentRedirect("/");

  const title = stripHtml(post.title.rendered).result;
  const excerpt = stripHtml(post.excerpt.rendered).result;

  const jsonLd: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: title,
    provider: {
      "@type": "Organization",
      name: "Bessa Community Apps"
    },
    areaServed: "Worldwide",
    name: title,
    image: post._embedded["wp:featuredmedia"][0].source_url,
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
      <div className={"px-4 mx-auto"}>
        <div className={"max-w-[800] mx-auto px-4 pt-24 sm:pt-32 pb-12"}>
          <h1 className={"text-4xl sm:text-6xl font-bold mb-4"}>
            <BlurInText>{title}</BlurInText>
          </h1>
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
        <div className={"max-w-[1300] mx-auto px-4 pt-12 sm:pt-16 pb-12"}>
          <Card
            className={
              "relative border-0 aspect-[1.4] rounded-2xl overflow-hidden"
            }
          >
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post._embedded["wp:featuredmedia"][0].alt_text}
              fill
              className={"object-cover"}
            />
          </Card>
        </div>
      </div>
      <div className={"max-w-[800] px-4 py-32 mx-auto"}>
        <div
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          className={
            "flex flex-col gap-4 [&_strong]:text-muted-foreground [&_h2]:text-2xl [&_h3]:text-xl [&_a]:text-muted-foreground [&_a]:underline [&_ul]:list-disc [&_ul]:pl-8 [&_img]:rounded-2xl [&_blockquote]:italic [&_blockquote]:border-l-2 [&_blockquote]:sm:w-6/8 [&_blockquote]:pl-8"
          }
        />
      </div>
      <ServicesSection sectionHeading={"More Services"} hiddenId={post.id} />
      <Process />
      <FAQ />
    </section>
  );
}
