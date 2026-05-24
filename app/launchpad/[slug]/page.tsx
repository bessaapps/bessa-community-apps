import { formatMetadata } from "@/lib/helpers";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { stripHtml } from "string-strip-html";
import Process from "@/components/Process";
import ServicesSection from "@/components/ServicesSection";
import { BlogPosting, WithContext } from "schema-dts";
import BlurInText from "@/components/BlurInText";
import dayjs from "dayjs";
import Me from "@/assets/images/me.png";
import { Post } from "@/lib/definitions";

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
    path: `/launchpad/${post.slug}`,
    imagePath: post._embedded["wp:featuredmedia"][0].source_url
  });
}

export async function generateStaticParams() {
  try {
    const { data } = await axios
      .get<Post[]>("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=3")
      .then((response) => response);

    return data.map((post) => ({
      slug: post.slug
    }));
  } catch (error) {
    console.error(error);
  }
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await axios
    .get(`https://cms.bessaapps.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    .then((response) => response.data?.[0])
    .catch((error) => console.error(error));

  const title = stripHtml(post.title.rendered).result;
  const excerpt = stripHtml(post.excerpt.rendered).result;

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: post._embedded["wp:featuredmedia"][0].source_url,
    description: excerpt,
    publisher: {
      "@type": "Organization",
      name: "Bessa Community Apps"
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
      <div className={"px-4 mx-auto"}>
        <div
          className={
            "max-w-[800] mx-auto flex flex-col gap-4 px-4 pt-24 sm:pt-32 pb-12"
          }
        >
          <Link href={"/launchpad"}>
            <p className={"text-primary uppercase"}>
              <BlurInText>Launchpad</BlurInText>
            </p>
          </Link>
          <h1 className={"text-4xl sm:text-6xl font-bold"}>
            <BlurInText>{title}</BlurInText>
          </h1>
          <div className={"flex items-center gap-4"}>
            <div className={"w-12 rounded-full aspect-square overflow-hidden"}>
              <Image src={Me} alt={"Author Profile Picture"} />
            </div>
            <div>
              <p className={"text-primary font-bold"}>Topher</p>
              <p className={"text-primary text-sm"}>
                {dayjs(post.modified).format("MMMM DD, YYYY")}&nbsp;&mdash;{" "}
                {Math.ceil(
                  stripHtml(post?.content?.rendered).result.split(" ").length /
                    225
                )}{" "}
                min read
              </p>
            </div>
          </div>
        </div>
        <div className={"max-w-[1300] mx-auto px-4 pt-12 sm:pt-16 pb-12"}>
          <div className={"relative aspect-[1.4] rounded-2xl overflow-hidden"}>
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post._embedded["wp:featuredmedia"][0].alt_text}
              fill
              className={"object-cover"}
            />
          </div>
        </div>
      </div>
      <div className={"max-w-[800] px-4 py-32 mx-auto"}>
        <div
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          className={
            "flex flex-col gap-4 [&_h2]:text-2xl [&_h3]:text-xl [&_strong]:text-muted-foreground [&_a]:text-muted-foreground [&_a]:underline [&_ul]:list-disc [&_ul]:pl-8 [&_blockquote]:italic [&_blockquote]:border-l-2 [&_blockquote]:w-6/8 [&_blockquote]:pl-8"
          }
        />
      </div>
      <ServicesSection sectionHeading={"Services"} />
      <Process />
    </section>
  );
}
