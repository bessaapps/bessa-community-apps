import { formatMetadata, formatTitle } from "@/lib/helpers";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { stripHtml } from "string-strip-html";
import { permanentRedirect } from "next/navigation";
import Process from "@/components/Process";
import ServicesSection from "@/components/ServicesSection";
import { bookingLink } from "@/lib/constants";
import { Service, WithContext } from "schema-dts";

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
    metadataTitle: formatTitle(title),
    metadataDescription: excerpt,
    path: `/${post.slug}`,
    imagePath: post._embedded["wp:featuredmedia"][0].source_url
  });
}

export default async function ServicePage({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await axios
    .get(`https://cms.bessaapps.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    .then((response) => response.data?.[0])
    .catch((error) => console.error(error));

  if (!post?.id) permanentRedirect("/");

  const title = stripHtml(post.title.rendered).result;
  const excerpt = stripHtml(post.excerpt.rendered).result;

  const jsonLd: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Mobile App Development",
    provider: {
      "@type": "Organization",
      name: "Bessa Community Apps"
    },
    areaServed: "Worldwide",
    name: formatTitle(title),
    image: post._embedded["wp:featuredmedia"][0].source_url,
    description: excerpt,
    url: "http://bessaapps.com"
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <div className={"max-w-[500] px-4 py-32 mx-auto"}>
        <div className={"flex flex-col items-center gap-8"}>
          <div
            className={
              "w-50 relative aspect-square rounded-2xl overflow-hidden"
            }
          >
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={formatTitle(title)}
              fill
              className={"object-cover"}
            />
          </div>
          <h1 className={"text-4xl sm:text-6xl font-bold text-center"}>
            {title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            className={"text-xl text-center"}
          />
          <Link href={bookingLink} target={"_blank"}>
            <Button size={"lg"}>Get Started</Button>
          </Link>
        </div>
      </div>
      <div className={"max-w-[1000] px-4 py-32 mx-auto"}>
        <div
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          className={
            "flex flex-col gap-4 [&_h2]:text-2xl [&_h3]:text-xl [&_a]:text-muted-foreground [&_a]:underline [&_ul]:list-disc [&_ul]:pl-8"
          }
        />
      </div>
      <ServicesSection sectionHeading={"More Services"} hiddenId={post.id} />
      <Process />
    </section>
  );
}
