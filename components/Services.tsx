import { stripHtml } from "string-strip-html";
import Link from "next/link";
import { Post } from "@/lib/definitions";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default async function Services({ hiddenId }: { hiddenId?: number }) {
  const response = await fetch(
    "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2&_embed",
    { next: { revalidate: 3600 } }
  );
  const services = await response.json();

  const filteredServices = services.filter(
    (service: Post) => service.id !== hiddenId
  );

  if (!services?.length) return;

  return (
    <>
      <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
        {filteredServices
          .slice(0, 3)
          .map(({ id, slug, title, acf, _embedded }: Post) => {
            const titleRendered = stripHtml(title.rendered).result;
            const featuredMedia = _embedded["wp:featuredmedia"][0];

            return (
              <Link key={id} href={`/${slug}`} title={titleRendered}>
                <div className={"bg-card relative rounded-2xl"}>
                  <div
                    className={
                      "h-full w-full max-h-full max-w-full aspect-square flex items-center justify-center p-8"
                    }
                  >
                    <Image
                      src={featuredMedia.source_url}
                      height={featuredMedia.media_details.height}
                      width={featuredMedia.media_details.width}
                      alt={featuredMedia.alt_text}
                      className={"h-full w-full object-contain"}
                      sizes={"(max-width: 640px) 100vw, 412px"}
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
                    <h3 className={"text-primary text-xl font-semibold"}>
                      {acf.short_title}
                    </h3>
                    <p className={"line-clamp-1"}>{titleRendered}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div />
        <div>
          <div className={"px-4 py-8"}>
            {filteredServices
              .slice(3, filteredServices.length)
              .map(({ id, slug, title, acf }: Post, index: number) => {
                const titleRendered = stripHtml(title.rendered).result;

                return (
                  <div key={id}>
                    <Link href={`/${slug}`} title={titleRendered}>
                      <p className={"line-clamp-1"}>
                        <span className={"text-primary font-semibold"}>
                          {acf.short_title}:
                        </span>{" "}
                        {titleRendered}
                      </p>
                    </Link>
                    {index !==
                      filteredServices.slice(3, filteredServices.length)
                        .length -
                        1 && <Separator className={"my-4"} />}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
