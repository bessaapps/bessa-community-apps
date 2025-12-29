import { Button } from "@/components/ui/button";
import Link from "next/link";
import Work1 from "@/assets/images/mockups/work-1.png";
import Work2 from "@/assets/images/mockups/work-2.png";
import Work3 from "@/assets/images/mockups/work-3.png";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { formatTitle } from "@/lib/helpers";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import Process from "@/components/Process";
import { stripHtml } from "string-strip-html";
import { Post } from "@/lib/definitions";
import { bookingLink } from "@/lib/constants";
import { Graph } from "schema-dts";

export default async function Home() {
  const heading = "Your app idea is great. Now what?";
  const subheading =
    "Turn your concept into reality with end-to-end startup app development, delivering custom cross-platform solutions for startups, organizations, and communities.";

  const works = [
    {
      name: "AS/400 App",
      href: "https://as400app.com",
      image: Work1,
      tags: ["Expo", "React Native", "Strapi"]
    },
    {
      name: "Bessa",
      href: "https://getbessa.com",
      image: Work2,
      tags: [
        "Expo",
        "React Native",
        "Express.js",
        "Node.js",
        "Websockets",
        "MongoDB"
      ]
    },
    {
      name: "Resume Mint",
      href: "https://getresumemint.com",
      image: Work3,
      tags: ["Next.js", "React.js", "MongoDB"]
    }
  ];

  const services = await axios
    .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2&_embed")
    .then((response) => response.data)
    .catch((error) => console.error(error));
  const articles = await axios
    .get(
      "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=6&per_page=2&_embed"
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));

  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Bessa Community Apps",
        url: "https://bessaapps.com",
        logo: "https://bessaapps.com/logo.png",
        sameAs: [
          "https://x.com/bessaapps",
          "https://linkedin.com/company/bessaapps",
          "https://github.com/bessaapps"
        ]
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://bessaapps.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Works",
            item: "https://bessapps.com/#works"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "About",
            item: "https://bessaapps.com/#about"
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Contact",
            item: "https://bessaapps.com/#contact"
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Launchpad",
            item: "https://bessaapps.com/launchpad"
          }
        ]
      }
    ]
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graph).replace(/</g, "\\u003c")
        }}
      />
      <div className={"px-4 mx-auto"}>
        <div className={"max-w-[1000] mx-auto px-4 pt-24 sm:pt-32 pb-12"}>
          <div className={"flex flex-col gap-4 max-w-full"}>
            <h1
              className={
                "text-foreground text-5xl sm:text-7xl font-bold leading-[1.1] sm:max-w-[75%]"
              }
            >
              {heading.split(" ").map((word: string, index: number) => (
                <span
                  key={index}
                  className={`opacity-0 animate-blur-in-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className={"text-primary text-xl sm:max-w-[50%] mb-8"}>
              {subheading.split(" ").map((word: string, index: number) => (
                <span
                  key={index}
                  className={`opacity-0 animate-blur-in-fade-in`}
                  style={{
                    animationDelay: `${heading.split(" ").length * 100 + index * 50}ms`
                  }}
                >
                  {word}{" "}
                </span>
              ))}
            </p>
            <Link href={bookingLink} target={"_blank"}>
              <Button
                size={"lg"}
                className={
                  "opacity-0 animate-blur-in-fade-in cursor-pointer hover:scale-110"
                }
                style={{
                  animationDelay: `${heading.split(" ").length * 100 + subheading.split(" ").length * 50 + 1000}ms`
                }}
              >
                Start my Project!
              </Button>
            </Link>
          </div>
        </div>
        <div
          className={
            "opacity-0 animate-blur-in-fade-in relative bg-cover bg-center"
          }
          style={{
            backgroundImage: "url('/hero.png')",
            aspectRatio: 1.547,
            animationDelay: `${heading.split(" ").length * 100 + subheading.split(" ").length * 50 + 2000}ms`
          }}
        >
          <div
            className={
              "absolute inset-0 bg-gradient-to-t from-background to-transparent"
            }
          />
        </div>
      </div>
      <div className={"max-w-[1000] px-4 pb-32 mx-auto"}>
        <div className={"grid sm:grid-cols-2 gap-4 mx-4 mb-8"}>
          <h2 className={"text-4xl font-bold"}>
            From Concept to Cross-Platform
          </h2>
          <p>
            I provide a comprehensive end-to-end process that guides you from
            initial ideation all the way to successful app distribution. Expand
            your digital presence with custom cross-platform apps for iOS,
            Android, and the web, fully optimized for search visibility and
            performance.{" "}
            <Link href={bookingLink} className={"font-semibold"}>
              Start Here &rarr;
            </Link>
          </p>
        </div>
        <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
          {services?.map((service: Post) => {
            const title = stripHtml(service.title.rendered).result;

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
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
                      "h-full inset-0 bg-gradient-to-b from-transparent to-card"
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
      </div>
      <Process />
      <div className={"max-w-[1000] px-4 py-32 mx-auto"} id={"works"}>
        <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
          {works.map(({ name, href, image, tags }, index: number) => (
            <div key={index} className={"flex flex-col gap-4"}>
              <Link href={href} title={name} target={"_blank"}>
                <div className={"bg-card rounded-2xl overflow-hidden"}>
                  <Image
                    src={image}
                    alt={formatTitle(name)}
                    className={"hover:scale-125 duration-200"}
                  />
                </div>
              </Link>
              <p className={"font-semibold"}>
                <Link href={href} title={"AS/400 App"} target={"_blank"}>
                  {name}
                </Link>
              </p>
              <div className={"flex gap-4 flex-wrap"}>
                {tags.map((tag: string, index: number) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={"max-w-[1000] px-4 py-32 mx-auto"} id={"about"}>
        <div className={"grid sm:grid-cols-4 gap-8 sm:gap-4 mx-4 mb-8"}>
          <div className={"sm:col-span-2 flex flex-col gap-4 justify-center"}>
            <h2 className={"text-4xl font-bold"}>I&apos;m Topher</h2>
            <p>
              <span className={"font-bold"}>
                A passionate community builder.
              </span>{" "}
              Specializing in startup app development, I empower innovators,
              organizations, and communities to transform their bold ideas into
              impactful cross-platform solutions that function seamlessly across
              iOS, Android, and the web. My end-to-end process guides you
              confidently from initial ideation all the way to launch.
            </p>
            <Link href={"mailto:topher@bessaapps.com"} title={formatTitle("")}>
              <Button>Let&apos;s Talk!</Button>
            </Link>
          </div>
          <div className={"rounded-2xl overflow-hidden"}>
            <Image src={Me} alt={formatTitle("")} />
          </div>
        </div>
      </div>
      <div className={"max-w-[1000] px-4 py-32 mx-auto"}>
        <SectionHeading>Launchpad</SectionHeading>
        <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
          {articles.map((article: Post) => {
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
                    className={
                      "h-full inset-0 bg-gradient-to-b from-transparent to-card"
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
          <Link href={"/launchpad"} title={formatTitle("Launchpad")}>
            <div
              className={
                "bg-card aspect-square rounded-2xl overflow-hidden flex items-center justify-center"
              }
            >
              <div
                className={"flex items-center gap-4 text-primary font-semibold"}
              >
                <p>See All</p>
                <AiOutlineArrowRight className={"text-3xl"} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
