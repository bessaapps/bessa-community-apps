import { formatMetadata, formatTitle } from "@/lib/helpers";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { stripHtml } from "string-strip-html";
import { permanentRedirect } from "next/navigation";
import Process from "@/components/Process";
import ServicesSection from "@/components/ServicesSection";
import { BlogPosting, WithContext } from "schema-dts";
import BlurInText from "@/components/BlurInText";
import dayjs from "dayjs";

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
    path: `/articles/${post.slug}`,
    imagePath: post._embedded["wp:featuredmedia"][0].source_url
  });
}

export default async function ArticlePage({
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

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: formatTitle(title),
    image: post._embedded["wp:featuredmedia"][0].source_url,
    description: excerpt,
    publisher: {
      "@type": "Organization",
      name: "Bessa Community Apps",
      logo: {
        "@type": "ImageObject",
        url: "https://bessaapps.com/logo.png"
      }
    }
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <div className={"max-w-[900] px-4 pt-32 mx-auto"}>
        <div className={"flex flex-col gap-8 mb-16"}>
          <Link href={"/launchpad"}>
            <p className={"text-primary text-center"}>
              <BlurInText>Launchpad</BlurInText>
            </p>
          </Link>
          <h1 className={"text-4xl sm:text-6xl font-bold text-center"}>
            <BlurInText>{title}</BlurInText>
          </h1>
          <div className={"flex justify-center"}>
            <div
              className={
                "w-125 relative aspect-square rounded-2xl overflow-hidden"
              }
            >
              <Image
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt={formatTitle(title)}
                fill
                className={"object-cover"}
              />
            </div>
          </div>
          <p className={"text-primary text-sm text-center"}>
            Topher &middot; {dayjs(post.modified).format("MMMM DD, YYYY")}
          </p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          className={
            "flex flex-col gap-4 [&_h2]:text-2xl [&_h3]:text-xl [&_a]:text-muted-foreground [&_a]:underline [&_ul]:list-disc [&_ul]:pl-8 [&_blockquote]:pl-8 [&_blockquote]:border-l-2"
          }
        />
      </div>
      <ServicesSection sectionHeading={"Services"} />
      <Process />
    </section>
  );
}
