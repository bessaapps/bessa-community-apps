import Link from "next/link";
import { Post } from "@/lib/definitions";
import { stripHtml } from "string-strip-html";
import Image from "next/image";

export default function ArticleCard({ article }: { article: Post }) {
  const title = stripHtml(article.title.rendered).result;
  const excerpt = stripHtml(article.excerpt.rendered).result;
  const featuredMedia = article?._embedded["wp:featuredmedia"][0];

  return (
    <Link key={article.id} href={`/launchpad/${article.slug}`} title={title}>
      <div className={"bg-card relative rounded-2xl"}>
        <div
          className={
            "h-full w-full max-h-full max-w-full aspect-square flex items-center justify-center p-16"
          }
        >
          <Image
            src={featuredMedia?.source_url}
            height={featuredMedia?.media_details.height}
            width={featuredMedia?.media_details.width}
            alt={featuredMedia?.alt_text}
            className={"h-full w-full object-contain"}
            sizes={"(max-width: 640px) 100vw, 640px"}
          />
        </div>
        <div
          className={
            "absolute inset-0 bg-linear-to-b from-transparent to-background"
          }
        />
        <div
          className={
            "absolute bg-transparent top-0 flex flex-col justify-between h-full p-4"
          }
        >
          <h3 className={"text-primary text-xl font-semibold"}>{title}</h3>
          <p className={"line-clamp-2"}>{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
