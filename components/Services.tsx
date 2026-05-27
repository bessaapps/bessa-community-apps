import { stripHtml } from "string-strip-html";
import Link from "next/link";
import axios from "axios";
import { Post } from "@/lib/definitions";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function Services({ hiddenId }: { hiddenId?: number }) {
  const services = await axios
    .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2&_embed")
    .then((response) => response.data)
    .catch((error) => console.error(error));

  const filteredServices = services.filter(
    (service: Post) => service.id !== hiddenId
  );

  if (!services?.length) return;

  return (
    <>
      <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
        {filteredServices.slice(0, 3).map((service: Post) => {
          const title = stripHtml(service.title.rendered).result;

          return (
            <Link key={service.id} href={`/${service.slug}`} title={title}>
              <Card
                className={
                  "border-0 relative w-full aspect-square rounded-2xl overflow-hidden"
                }
              >
                <Image
                  src={service._embedded["wp:featuredmedia"][0].source_url}
                  alt={service?._embedded["wp:featuredmedia"][0]?.alt_text}
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
                  <p className={"text-primary font-semibold sm:w-3/4"}>
                    {title}
                  </p>
                </div>
              </Card>
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
              .map((service: Post, index: number) => {
                const title = stripHtml(service.title.rendered).result;

                return (
                  <>
                    <Link
                      key={service.id}
                      href={`/${service.slug}`}
                      title={title}
                    >
                      <p className={"text-primary font-semibold sm:w-3/4"}>
                        {title}
                      </p>
                    </Link>
                    {index !==
                      filteredServices.slice(3, filteredServices.length)
                        .length -
                        1 && <Separator className={"my-4"} />}
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
