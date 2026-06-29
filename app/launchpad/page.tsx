import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatMetadata } from "@/lib/helpers";
import { Post } from "@/lib/definitions";
import ArticleCard from "@/components/ArticleCard";
import { Blog, WithContext } from "schema-dts";
import { bookingLink, url } from "@/lib/constants";
import Section from "../../components/sections/Section";

export const metadata = formatMetadata({
  metadataTitle: "Launchpad: The App Builder's Guide",
  metadataDescription:
    "Stop dreaming; start launching. The Launchpad blog helps innovators move past feeling immobilized with custom application development and a clear path forward.",
  path: `${url}/launchpad`
});

export default async function Launchpad() {
  const response = await fetch(
    "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=3&per_page=20&_embed",
    { next: { revalidate: 3600 } }
  );

  const articles = await response.json();

  const jsonLd: WithContext<Blog> = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Launchpad",
    url: `${url}/launchpad`,
    description:
      "Stop dreaming, start launching. I guide innovators and organizations through custom app development with a clear, non-intimidating path to digital success.",
    about:
      "Custom application development, cross-platform mobile apps, digital product ideation, and app distribution strategies for innovators and organizations.",
    publisher: {
      "@type": "Organization",
      name: "Bessa Community Apps",
      logo: {
        "@type": "ImageObject",
        url: `${url}/logo.png`
      }
    },
    inLanguage: "en-US"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <Section containerClassName={"pt-[65]"}>
        <h1 className={"text-5xl font-bold mb-4"}>Launchpad</h1>
        <p className={"text-xl sm:max-w-[50%] mb-8"}>
          Your go-to blog for turning bold ideas into impactful digital products
          through expert custom application development. Whether you are an
          innovator or an organization, I provide the clear, non-intimidating
          path forward you need to stop dreaming and start launching.
        </p>
        <Link href={bookingLink} target={"_blank"} rel={"noopener noreferrer"}>
          <Button size={"lg"} className={"cursor-pointer hover:scale-110"}>
            Start my Project!
          </Button>
        </Link>
      </Section>
      <Section>
        <div className={"grid sm:grid-cols-3 gap-4"}>
          {articles.map((article: Post, index: number) =>
            index === 1 ? (
              <div key={index} className={"sm:col-span-2 sm:row-span-2"}>
                <ArticleCard article={article} />
              </div>
            ) : (
              <ArticleCard key={index} article={article} />
            )
          )}
        </div>
      </Section>
    </main>
  );
}
