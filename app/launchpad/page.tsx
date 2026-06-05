import { Button } from "@/components/ui/button";
import Link from "next/link";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import { formatMetadata, formatTitle } from "@/lib/helpers";
import axios from "axios";
import { Post } from "@/lib/definitions";
import BlurInText from "@/components/BlurInText";
import ArticleCard from "@/components/ArticleCard";
import { Blog, WithContext } from "schema-dts";
import { bookingLink, url } from "@/lib/constants";

export const metadata = formatMetadata({
  metadataTitle: formatTitle("Launchpad"),
  metadataDescription:
    "Stop dreaming; start launching. The Launchpad blog helps innovators move past feeling immobilized with custom application development and a clear path forward.",
  path: "https://bessaapps.com/launchpad"
});

export default async function Launchpad() {
  const subheading =
    "Your go-to blog for turning bold ideas into impactful digital products through expert custom application development. Whether you are an innovator or an organization, I provide the clear, non-intimidating path forward you need to stop dreaming and start launching.";

  const articles = await axios
    .get(
      "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=3&per_page=20&_embed"
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));

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
      <div className={"max-w-[1300] px-4 mx-auto"}>
        <div className={"py-24 sm:py-32"}>
          <div className={"flex flex-col gap-4"}>
            <div className={"text-xl"}>
              <div className={"flex flex-col gap-4 max-w-full"}>
                <h1
                  className={
                    "text-5xl sm:text-7xl font-bold leading-[1.1] sm:max-w-[75%]"
                  }
                >
                  <BlurInText>Launchpad</BlurInText>
                </h1>
                <p className={"text-xl sm:max-w-[50%] mb-8"}>
                  <BlurInText
                    offset={"launchpad".split(" ").length * 100}
                    multiplier={50}
                  >
                    {subheading}
                  </BlurInText>
                </p>
                <Link
                  href={bookingLink}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  <Button
                    size={"lg"}
                    className={
                      "opacity-0 animate-blur-in-fade-in cursor-pointer hover:scale-110"
                    }
                    style={{
                      animationDelay: `${"launchpad".split(" ").length * 100 + subheading.split(" ").length * 50 + 1000}ms`
                    }}
                  >
                    Start my Project!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={"py-24 sm:py-32"}>
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
        </div>
        <div className={"py-24 sm:py-32"}>
          <div className={"grid sm:grid-cols-3 gap-4"}>
            <div />
            <div className={"bg-card aspect-8/10 rounded-2xl"}>
              <div className={"flex flex-col justify-between h-full p-4"}>
                <h3 className={"text-4xl font-semibold text-primary"}>
                  About the Author
                </h3>
                <div className={"flex flex-col gap-4"}>
                  <p className={"text-primary"}>
                    Specializing in custom application development, I help
                    innovators and communities transform their bold ideas into
                    impactful, cross-platform realities. I offer an empathetic,
                    end-to-end process from concept to app store distribution.
                  </p>
                  <Link
                    href={"mailto:topher@bessaapps.com"}
                    title={formatTitle("")}
                  >
                    <Button>Let&apos;s Talk!</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={"rounded-2xl overflow-hidden"}>
              <Image
                src={Me}
                alt={
                  "Headshot of a smiling developer with glasses and a mustache, an expert providing custom mobile app development services."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
