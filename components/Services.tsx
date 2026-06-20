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
            const renderedTitle = stripHtml(title.rendered).result;

            return (
              <Link key={id} href={`/${slug}`} title={renderedTitle}>
                <div
                  className={
                    "relative w-full aspect-square rounded-2xl overflow-hidden"
                  }
                >
                  <Image
                    src={_embedded["wp:featuredmedia"][0].source_url}
                    alt={_embedded["wp:featuredmedia"][0]?.alt_text}
                    fill
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
                    <p className={"text-primary font-semibold"}>
                      {acf.short_title}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div />
        <div>
          <div className={"py-8"}>
            {filteredServices
              .slice(3, filteredServices.length)
              .map(({ id, slug, title, acf }: Post, index: number) => {
                const titleRendered = stripHtml(title.rendered).result;

                return (
                  <div key={index}>
                    <Link key={id} href={`/${slug}`} title={titleRendered}>
                      <p className={"text-primary font-semibold sm:w-3/4"}>
                        {acf.short_title}
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
