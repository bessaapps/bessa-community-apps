import { formatTitle } from "@/lib/helpers";
import Link from "next/link";
import { Post } from "@/lib/definitions";
import { stripHtml } from "string-strip-html";

export default function ArticleCard({ article }: { article: Post }) {
  const title = stripHtml(article.title.rendered).result;

  return (
    <Link
      key={article.id}
      href={`/launchpad/${article.slug}`}
      title={formatTitle(title)}
    >
      <div
        className={
          "relative bg-card aspect-square rounded-2xl overflow-hidden bg-cover bg-center"
        }
        style={{
          backgroundImage: `url(\'${article._embedded["wp:featuredmedia"][0].source_url}\')`
        }}
      >
        <div
          className={"h-full inset-0 bg-gradient-to-b from-transparent to-card"}
        />
        <div className={"absolute top-0 flex flex-col justify-end h-full p-4"}>
          <p className={"text-primary font-semibold"}>{title}</p>
        </div>
      </div>
    </Link>
  );
}
