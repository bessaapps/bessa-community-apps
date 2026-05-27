import { formatTitle } from "@/lib/helpers";
import Link from "next/link";
import { Post } from "@/lib/definitions";
import { stripHtml } from "string-strip-html";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function ArticleCard({ article }: { article: Post }) {
  const title = stripHtml(article.title.rendered).result;

  return (
    <Link key={article.id} href={`/launchpad/${article.slug}`} title={title}>
      <Card
        className={
          "border-0 relative w-full aspect-square rounded-2xl overflow-hidden"
        }
      >
        <Image
          src={article?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
          alt={formatTitle(title)}
          fill
          style={{ objectFit: "cover" }}
          sizes={"640px"}
        />
        <div
          className={
            "absolute inset-0 bg-linear-to-b from-transparent to-background"
          }
        />
        <div
          className={
            "absolute bg-transparent top-0 flex flex-col justify-end h-full p-4"
          }
        >
          <p className={"text-primary font-semibold"}>{title}</p>
        </div>
      </Card>
    </Link>
  );
}
