import { formatMetadata, formatTitle } from "@/lib/helpers";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { stripHtml } from "string-strip-html";
import { permanentRedirect } from "next/navigation";
import Process from "@/components/Process";
import Services from "@/components/Services";
import { bookingLink } from "@/lib/constants";
import { BlogPosting, WithContext } from "schema-dts";

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
      <div className={"max-w-[1000] px-4 py-32 mx-auto"}>
        <div className={"grid sm:grid-cols-2 gap-4"}>
          <div
            className={
              "hidden sm:block relative aspect-square rounded-2xl overflow-hidden"
            }
          >
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={formatTitle(title)}
              fill
              className={"object-cover"}
            />
          </div>
          <div className={"flex flex-col justify-center gap-8"}>
            <h1 className={"text-4xl sm:text-6xl font-bold"}>{title}</h1>
            <Link href={bookingLink} target={"_blank"}>
              <Button size={"lg"}>Book a FREE Call!</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={"max-w-[900] px-4 py-32 mx-auto"}>
        <div
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          className={"flex flex-col gap-4 wordpress-post"}
        />
      </div>
      <Services sectionHeading={"Services"} />
      <Process />
    </section>
  );
}
