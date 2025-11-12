import { formatMetadata, formatTitle } from "@/lib/helpers";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { stripHtml } from "string-strip-html";

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
    metadataTitle: formatTitle(stripHtml(post?.title?.rendered).result),
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
    .get(`https://cms.bessaapps.com/wp-json/wp/v2/posts?slug=${slug}`)
    .then((response) => response.data?.[0])
    .catch((error) => console.error(error));

  return (
    <>
      <div className={"max-w-7xl mx-auto px-4 py-16 sm:py-32"}>
        <div className={"flex flex-col gap-4 max-w-full sm:max-w-[75%]"}>
          <div className={"w-24 aspect-square"}>
            <Image src={Logo} alt={formatTitle(post.title.rendered)} />
          </div>
          <h1
            className={
              "text-4xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold leading-[1.1]"
            }
          >
            {post.title.rendered}
          </h1>
          <div className={"flex gap-4"}>
            <Link
              href={"https://calendar.app.google/fCR1Xnhv9FUfXznPA"}
              target={"_blank"}
            >
              <Button size={"lg"}>Let&apos;s Talk!</Button>
            </Link>
            <Link href={"/"} title={formatTitle(post.title.rendered)}>
              <Button size={"lg"}>Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={"max-w-7xl mx-auto px-4 py-16 sm:py-32"}>
        <div className={"flex flex-col gap-4"}>
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            className={"flex flex-col gap-4 wordpress-post"}
          />
        </div>
      </div>
    </>
  );
}
