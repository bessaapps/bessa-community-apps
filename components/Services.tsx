import { stripHtml } from "string-strip-html";
import Link from "next/link";
import { formatTitle } from "@/lib/helpers";
import axios from "axios";
import { Post } from "@/lib/definitions";

export default async function Services({ hiddenId }: { hiddenId?: number }) {
  const services = await axios
    .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2&_embed")
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return (
    <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
      {services
        .filter((service: Post) => service.id !== hiddenId)
        .map((service: Post) => {
          const title = stripHtml(service.title.rendered).result;

          return (
            <Link
              key={service.id}
              href={`/${service.slug}`}
              title={formatTitle(title)}
            >
              <div
                className={
                  "relative bg-card aspect-square rounded-2xl overflow-hidden bg-cover bg-center"
                }
                style={{
                  backgroundImage: `url(\'${service._embedded["wp:featuredmedia"][0].source_url}\')`
                }}
              >
                <div
                  className={
                    "h-full inset-0 bg-linear-to-b from-transparent to-card"
                  }
                />
                <div
                  className={
                    "absolute top-0 flex flex-col justify-end h-full p-4"
                  }
                >
                  <p className={"text-primary font-semibold"}>{title}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
