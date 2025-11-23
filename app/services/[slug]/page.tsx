import { formatMetadata, formatTitle } from "@/lib/helpers";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { stripHtml } from "string-strip-html";
import { permanentRedirect } from "next/navigation";
import Process from "@/components/Process";
import SectionHeading from "@/components/SectionHeading";

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

  return formatMetadata({
    metadataTitle: formatTitle(stripHtml(post?.excerpt?.rendered).result),
    metadataDescription: "",
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

  const excerpt = stripHtml(post.excerpt.rendered).result;

  return (
    <>
      <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
        <div className={"grid sm:grid-cols-2 gap-4"}>
          <div className={"hidden sm:block relative aspect-square"}>
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={formatTitle(excerpt)}
              fill
              objectFit={"cover"}
            />
          </div>
          <div className={"flex flex-col justify-center gap-8"}>
            <Link
              href={"/"}
              title={formatTitle("")}
              className={"w-24 aspect-square"}
            >
              <Image src={Logo} alt={formatTitle(post.title.rendered)} />
            </Link>
            <h1
              className={
                "animate-text text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-muted-foreground via-primary to-foreground font-bold"
              }
            >
              {excerpt}
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
        <SectionHeading>{post?.title?.rendered}</SectionHeading>
        <div className={"flex flex-col gap-4"}>
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            className={"flex flex-col gap-4 wordpress-post"}
          />
        </div>
      </div>
      <Process />
    </>
  );
}
