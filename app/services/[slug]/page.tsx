import { formatMetadata, formatTitle } from "@/lib/helpers";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { stripHtml } from "string-strip-html";
import { permanentRedirect } from "next/navigation";
import Process from "@/components/Process";
import Services from "@/components/Services";

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await axios
    .get(`https://cms.bessaapps.com/wp-json/wp/v2/posts?slug=${slug}`)
    .then((response) => response.data?.[0])
    .catch((error) => console.error(error));

  const title = stripHtml(post.title.rendered).result;
  const excerpt = stripHtml(post.excerpt.rendered).result;

  return formatMetadata({
    metadataTitle: formatTitle(title),
    metadataDescription: excerpt,
    path: `/services/${post.slug}`
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

  return (
    <>
      <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
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
              objectFit={"cover"}
            />
          </div>
          <div className={"flex flex-col justify-center gap-8"}>
            <h1
              className={
                "animate-text text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-muted-foreground via-primary to-foreground font-bold"
              }
            >
              {title}
            </h1>
            <div className={"flex gap-4"}>
              <Link
                href={"https://calendar.app.google/fCR1Xnhv9FUfXznPA"}
                target={"_blank"}
              >
                <Button size={"lg"}>Let&apos;s Talk!</Button>
              </Link>
              <Link href={"/"} title={formatTitle("")}>
                <Button size={"lg"}>Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
        <div className={"grid sm:grid-cols-4 gap-4"}>
          <div className={"hidden sm:block"} />
          <div className={"col-span-3 flex flex-col gap-4"}>
            <div
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              className={"flex flex-col gap-4 wordpress-post"}
            />
          </div>
        </div>
      </div>
      <Services sectionHeading={"More Services"} hiddenId={post.id} />
      <Process />
    </>
  );
}
