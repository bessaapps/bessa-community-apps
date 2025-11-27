import SectionHeading from "@/components/SectionHeading";
import { stripHtml } from "string-strip-html";
import Link from "next/link";
import { formatTitle } from "@/lib/helpers";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Post } from "@/lib/definitions";

export default async function Services({
  sectionHeading,
  hiddenId
}: {
  sectionHeading: string;
  hiddenId: number;
}) {
  const services = await axios
    .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2")
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return (
    <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
      <SectionHeading>{sectionHeading}</SectionHeading>
      <div className={"grid grid-cols-1 sm:grid-cols-4 gap-4"}>
        {services
          .filter((service: Post) => service.id !== hiddenId)
          .map((service: Post) => {
            const title = stripHtml(service.title.rendered).result;

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                title={formatTitle(title)}
              >
                <div className={"bg-card aspect-square rounded-2xl p-4"}>
                  <div className={"flex flex-col justify-between h-full"}>
                    <div>
                      <p className={"text-primary font-semibold"}>{title}</p>
                    </div>
                    <div>
                      <Button>Learn More</Button>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
