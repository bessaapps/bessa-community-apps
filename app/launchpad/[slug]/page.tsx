import { formatMetadata } from "@/lib/helpers";
import Link from "next/link";
import Image from "next/image";
import { stripHtml } from "string-strip-html";
import ProcessSection from "../../../components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import { BlogPosting, WithContext } from "schema-dts";
import BlurInText from "@/components/BlurInText";
import dayjs from "dayjs";
import Me from "@/assets/images/me.png";
import { bookingLink, url } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import ShareButtons from "@/components/ShareButtons";
import FAQSection from "../../../components/FAQSection";
import { permanentRedirect } from "next/navigation";

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
  const posts = await response.json();
  const post = posts?.[0];

  const title = stripHtml(post.title.rendered).result;
  const excerpt = stripHtml(post.excerpt.rendered).result;

  return formatMetadata({
    metadataTitle: post?.acf?.meta_title || title,
    metadataDescription: excerpt,
    path: `/launchpad/${post.slug}`,
    imagePath: post._embedded["wp:featuredmedia"][0].source_url
  });
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetch(
    `https://cms.bessaapps.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 3600 } }
  );
  const posts = await response.json();
  const post = posts?.[0];

  if (!post?.id) return permanentRedirect("/launchpad");

  const title = stripHtml(post.title.rendered).result;
  const excerpt = stripHtml(post.excerpt.rendered).result;

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post?.acf?.meta_title || title,
    image: post._embedded["wp:featuredmedia"][0].source_url,
    description: excerpt,
    publisher: {
      "@type": "Organization",
      name: "Bessa Community Apps"
    }
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <div className={"max-w-7xl px-4 mx-auto"}>
        <div
          className={"max-w-[800] mx-auto flex flex-col gap-4 my-24 sm:my-32"}
        >
          <Link href={"/launchpad"} title={"Launchpad - Bessa Community Apps"}>
            <p className={"text-primary uppercase"}>
              <BlurInText>Launchpad</BlurInText>
            </p>
          </Link>
          <h1 className={"text-4xl sm:text-6xl font-bold"}>
            <BlurInText offset={100} multiplier={50}>
              {title}
            </BlurInText>
          </h1>
          <div
            className={
              "flex items-center gap-4 opacity-0 animate-blur-in-fade-in"
            }
            style={{
              animationDelay: `${100 + title.split(" ").length * 50 + 1000}ms`
            }}
          >
            <div className={"w-12 rounded-full aspect-square overflow-hidden"}>
              <Image
                src={Me}
                alt={
                  "Headshot of a smiling developer with glasses and a mustache, an expert providing custom mobile app development services."
                }
              />
            </div>
            <div>
              <p className={"text-primary font-bold"}>
                Topher, Software Engineer
              </p>
              <p className={"text-primary text-sm"}>
                <time dateTime={dayjs(post.modified).format("YYYY-MM-DD")}>
                  {dayjs(post.modified).format("MMMM DD, YYYY")}
                  &nbsp;&mdash;{" "}
                </time>
                {Math.ceil(
                  stripHtml(post?.content?.rendered).result.split(" ").length /
                    225
                )}{" "}
                min read
              </p>
            </div>
            <Link
              href={bookingLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className={"ml-auto my-8"}
            >
              <Button size={"lg"} className={"cursor-pointer hover:scale-110"}>
                Start my Project!
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <div className={"relative aspect-[1.4] rounded-2xl overflow-hidden"}>
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post._embedded["wp:featuredmedia"][0].alt_text}
              fill
              className={"object-cover"}
            />
          </div>
        </div>
        <div className={"max-w-[800] mx-auto py-32"}>
          <div className={"flex flex-col gap-8"}>
            <div
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              className={
                "flex flex-col gap-4 [&_strong]:text-muted-foreground [&_h2]:text-2xl [&_h3]:text-xl [&_a]:text-muted-foreground [&_a]:underline [&_ul]:list-disc [&_ul]:pl-8 [&_img]:w-full [&_img]:rounded-2xl [&_blockquote]:italic [&_blockquote]:border-l-2 [&_blockquote]:sm:w-6/8 [&_blockquote]:pl-8"
              }
            />
            <div className={"flex justify-end"}>
              <ShareButtons
                url={`${url}/launchpad/${post.slug}`}
                title={post?.acf?.meta_title || title}
              />
            </div>
          </div>
        </div>
        <ServicesSection sectionHeading={"Services"} />
        <ProcessSection />
        <FAQSection />
      </div>
    </article>
  );
}
