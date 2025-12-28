import { Button } from "@/components/ui/button";
import Link from "next/link";
import Work1 from "@/assets/images/mockups/work-1.png";
import Work2 from "@/assets/images/mockups/work-2.png";
import Work3 from "@/assets/images/mockups/work-3.png";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import { SiAndroid, SiApple } from "react-icons/si";
import SectionHeading from "@/components/SectionHeading";
import { formatTitle } from "@/lib/helpers";
import GradientHeading from "@/components/GradientHeading";
import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import Process from "@/components/Process";
import { stripHtml } from "string-strip-html";
import { Post } from "@/lib/definitions";
import { bookingLink } from "@/lib/constants";
import { Graph } from "schema-dts";

const Highlights = ({ list }: { list: string[] }) => {
  return (
    <ul className={"flex flex-col gap-2"}>
      {list?.map((item: string, index: number) => (
        <li key={index} className={"flex items-center gap-2"}>
          <span className={"text-xl"}>
            <AiOutlineCheck />
          </span>
          <span className={"text-xl font-semibold"}>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default async function Home() {
  const heading = "Your app idea is great. Now what?";
  const subheading =
    "Stop dreaming and start launching. Turn your bold concepts into reality with accessible mobile app development services for ideas that deserve momentum.";

  const services = await axios
    .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2")
    .then((response) => response.data)
    .catch((error) => console.error(error));
  const articles = await axios
    .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=6")
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
      <div className={"max-w-[1200] px-4 pt-16 pb-32 mx-auto"}>
        <div className={"max-w-7xl mx-auto px-4 py-16 sm:py-32"}>
          <div className={"flex flex-col gap-4 max-w-full"}>
            <h1
              className={
                "text-primary text-5xl sm:text-7xl font-bold leading-[1.1] sm:max-w-[75%]"
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
            <p
              className={
                "text-secondary-foreground text-2xl sm:max-w-[66%] mb-8"
              }
            >
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
                  animationDelay: `${heading.split(" ").length * 100 + subheading.split(" ").length * 50 + 500}ms`
                }}
              >
                Start my Project!
              </Button>
            </Link>
          </div>
        </div>
        <div className={"flex justify-center gap-4"}>
          <SiApple
            size={"6rem"}
            color={"var(--color-foreground)"}
            className={"animate-bounce"}
            style={{ animationDelay: ".85s" }}
          />
          <SiAndroid
            size={"6rem"}
            color={"var(--color-foreground)"}
            className={"animate-bounce"}
          />
        </div>
      </div>
      <div className={"max-w-[1200] px-4 py-32 mx-auto"} id={"works"}>
        <SectionHeading>Selected Works</SectionHeading>
        <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
          <div className={"flex flex-col gap-4"}>
            <Link
              href={"https://apps.apple.com/us/app/learn-as-400/id6751155402"}
              title={"AS/400 App"}
              target={"_blank"}
            >
              <div className={"rounded-2xl overflow-hidden"}>
                <Image
                  src={Work1}
                  alt={formatTitle("")}
                  className={"hover:scale-125 duration-200"}
                />
              </div>
            </Link>
            <p className={"font-semibold"}>
              <Link
                href={"https://apps.apple.com/us/app/learn-as-400/id6751155402"}
                title={"AS/400 App"}
                target={"_blank"}
              >
                AS/400 App
              </Link>
            </p>
            <div className={"flex gap-4 flex-wrap"}>
              <Badge>Expo</Badge>
              <Badge>React Native</Badge>
              <Badge>Strapi</Badge>
            </div>
          </div>
          <div className={"flex flex-col gap-4"}>
            <Link
              href={"https://getbessa.com"}
              title={"Bessa | Gay Social Media App"}
              target={"_blank"}
              className={"rounded-2xl overflow-hidden"}
            >
              <Image
                src={Work2}
                alt={formatTitle("")}
                className={"hover:scale-125 duration-200"}
              />
            </Link>
            <p className={"font-semibold"}>
              <Link
                href={"https://getbessa.com"}
                title={"Bessa | Gay Social Media App"}
                target={"_blank"}
              >
                Bessa
              </Link>
            </p>
            <div className={"flex gap-4 flex-wrap"}>
              <Badge>Expo</Badge>
              <Badge>React Native</Badge>
              <Badge>Express.js</Badge>
              <Badge>Node.js</Badge>
              <Badge>Websockets</Badge>
              <Badge>MongoDB</Badge>
            </div>
          </div>
          <div className={"flex flex-col gap-4"}>
            <Link
              href={"https://getresumemint.com"}
              title={"Resume Mint"}
              target={"_blank"}
              className={"rounded-2xl overflow-hidden"}
            >
              <Image
                src={Work3}
                alt={formatTitle("")}
                className={"hover:scale-125 duration-200"}
              />
            </Link>
            <p className={"font-semibold"}>
              <Link
                href={"https://getresumemint.com"}
                title={"Resume Mint"}
                target={"_blank"}
              >
                Resume Mint
              </Link>
            </p>
            <div className={"flex gap-4 flex-wrap"}>
              <Badge>Next.js</Badge>
              <Badge>React.js</Badge>
              <Badge>MongoDB</Badge>
            </div>
          </div>
          <div className={"hidden sm:block"} />
          <div className={"sm:col-span-2 flex flex-col gap-4 pt-8"}>
            <GradientHeading>
              Mobile App Development Services that turn Real Ideas into Real
              Impact
            </GradientHeading>
            <Highlights
              list={[
                "iOS, Android, and Web",
                "Designed for Clarity",
                "Scalable Architecture for Long-Term Growth"
              ]}
            />
            <p>
              I deliver human-centered mobile app development services without
              the jargon. Whether it&apos;s custom app development, startup app
              solutions, or ongoing app scaling and maintenance, every build is
              crafted to feel intuitive, polished, and ready to grow with your
              vision. I make technology feel simple, approachable, and genuinely
              helpful for the people who use it.
            </p>
          </div>
        </div>
      </div>
      <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
        <SectionHeading>Services</SectionHeading>
        <div className={"grid grid-cols-1 sm:grid-cols-4 gap-4"}>
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
                    "bg-card aspect-square rounded-2xl overflow-hidden"
                  }
                >
                  <div className={"flex flex-col justify-between h-full p-4"}>
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
          <div className={"row-span-2"} />
          <div className={"flex flex-col gap-4 sm:col-span-3 pt-8"}>
            <GradientHeading>
              Clear, Approachable Solutions for Founders, Teams, and
              Organizations
            </GradientHeading>
            <Highlights
              list={[
                "Mobile App Development for iOS & Android",
                "Web Apps & Websites",
                "Growth Focused Optimization",
                "App Store & Play Store Distribution"
              ]}
            />
            <p className={"col-span-2"}>
              As a mobile app developer, my goal is to make mobile app
              development services feel simple, human, and collaborative. Every
              offering, whether it&apos;s custom app development or startup app
              solutions, is built around clarity, communication, and
              craftsmanship. Instead of drowning you in complex jargon, I guide
              you through each step so your product moves from idea to launch
              with confidence.
            </p>
          </div>
        </div>
      </div>
      <Process />
      <div className={"max-w-[1200] px-4 py-32 mx-auto"} id={"about"}>
        <SectionHeading>Hi, there!</SectionHeading>
        <div className={"grid sm:grid-cols-4 gap-4"}>
          <div className={"bg-card aspect-[8/10] rounded-2xl"}>
            <div className={"flex flex-col justify-between h-full p-4"}>
              <h3 className={"font-semibold text-primary"}>I&apos;m Topher</h3>
              <div className={"flex flex-col gap-4"}>
                <p className={"text-primary"}>
                  Ten years of bringing ideas to life through mobile and web
                  apps, solving real problems and building solutions that
                  support communities.
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
            <Image src={Me} alt={formatTitle("")} />
          </div>
          <div className={"hidden sm:block col-span-2"} />
          <div className={"hidden sm:block col-span-2"} />
          <div className={"sm:col-span-2"}>
            <GradientHeading>
              Meet your mobile app developer: part builder, part guide, part
              community connector.
            </GradientHeading>
          </div>
        </div>
      </div>
      <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
        <SectionHeading>Launchpad</SectionHeading>
        <div className={"grid grid-cols-1 sm:grid-cols-4 gap-4"}>
          {articles.slice(0, 3).map((article: Post) => {
            const title = stripHtml(article.title.rendered).result;

            return (
              <Link
                key={article.id}
                href={`/launchpad/${article.slug}`}
                title={formatTitle(title)}
              >
                <div
                  className={
                    "bg-card aspect-square rounded-2xl overflow-hidden"
                  }
                >
                  <div className={"flex flex-col justify-between h-full p-4"}>
                    <div>
                      <p className={"text-primary font-semibold"}>{title}</p>
                    </div>
                    <div>
                      <Button>Read the Article</Button>
                    </div>
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
