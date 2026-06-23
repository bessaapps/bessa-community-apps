import { Button } from "@/components/ui/button";
import Link from "next/link";
import Work1 from "@/assets/images/mockups/work-1.png";
import Work2 from "@/assets/images/mockups/work-2.png";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProcessSection from "../components/ProcessSection";
import { Post } from "@/lib/definitions";
import { bookingLink } from "@/lib/constants";
import { Graph } from "schema-dts";
import BlurInText from "@/components/BlurInText";
import ArticleCard from "@/components/ArticleCard";
import Services from "@/components/Services";
import FAQSection from "../components/FAQSection";
import Hero from "../components/Hero";

export default async function Home() {
  const HEADING = "From Impactful Concept to App Store Launch";
  const SUBHEADING =
    "Building and publishing revolutionary cross-platform apps to the Apple App Store and Google Play for innovators, organizations, and communities.";

  const WORKS = [
    {
      name: "AS/400 App",
      href: "https://as400app.com",
      image: Work1,
      tags: [
        "Expo",
        "React Native",
        "React Native Reanimated",
        "In-App Purchases",
        "Strapi"
      ]
    },
    {
      name: "Bessa",
      href: "https://getbessa.com",
      image: Work2,
      tags: [
        "Expo",
        "React Native",
        "Lottie",
        "Websockets",
        "Push Notifications",
        "Postgres"
      ]
    }
  ];

  const response = await fetch(
    "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=3&per_page=3&_embed",
    { next: { revalidate: 3600 } }
  );
  const articles = await response.json();

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
      <div className={"max-w-[1300] px-4 mx-auto"}>
        <div className={"py-24 sm:py-16"}>
          <div className={"flex flex-col gap-4 max-w-full"}>
            <h1 className={"text-5xl font-bold leading-[1.1] sm:max-w-[49%]"}>
              <BlurInText>{HEADING}</BlurInText>
            </h1>
            <p className={"text-xl sm:max-w-[40%] mb-8"}>
              <BlurInText
                offset={HEADING.split(" ").length * 100}
                multiplier={50}
              >
                {SUBHEADING}
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
                  animationDelay: `${HEADING.split(" ").length * 100 + SUBHEADING.split(" ").length * 50 + 1000}ms`
                }}
              >
                Start my Project!
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Hero
        animationDelay={`${HEADING.split(" ").length * 100 + SUBHEADING.split(" ").length * 50 + 2000}ms`}
      />
      <div className={"max-w-[1300] px-4 mx-auto"}>
        <div className={"py-32"}>
          <div className={"grid sm:grid-cols-2 gap-4 mx-4 mb-8"}>
            <h2 className={"text-4xl font-bold"}>Services</h2>
            <p>
              Get your quality app that works beautifully on iOS, Android, and
              web. I&apos;ll help you all the way from validating your idea to
              publishing it to the app stores, help you with everything in
              between, test your app, keep your app secure, snappy, and
              up-to-date, and tackle any technical issues that may come up.{" "}
              <Link
                href={bookingLink}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={"text-primary font-semibold"}
              >
                Start Here &rarr;
              </Link>
            </p>
          </div>
          <Services />
        </div>
        <ProcessSection />
        <div className={"py-32"} id={"works"}>
          <div className={"grid sm:grid-cols-2 gap-4 mx-4 mb-8"}>
            <h2 className={"text-4xl font-bold"}>Pinned Projects</h2>
            <p>
              Through comprehensive mobile development and consulting, I&apos;ve
              helped startups, non-profits, and local communities overcome the
              hurdle of technical complexity to launch high-performance,
              cross-platform tools. Here are some highlights of my commitment to
              custom application development that is not only modern and
              high-tech but also deeply human-centered, providing the scalable
              digital infrastructure your organization needs to grow and thrive.{" "}
              <Link
                href={bookingLink}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={"text-primary font-semibold"}
              >
                Start Here &rarr;
              </Link>
            </p>
          </div>
          <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4"}>
            {WORKS.map(({ name, href, image, tags }) => (
              <Link
                key={href}
                href={href}
                title={name}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <div
                  className={
                    "relative w-full aspect-square rounded-2xl overflow-hidden"
                  }
                >
                  <Image
                    src={image}
                    alt={name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes={"412px"}
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
                    <p className={"text-primary font-semibold"}>{name}</p>
                    <p>
                      {tags.map((tag: string, index: number) => (
                        <span key={index}>
                          {tag}
                          {index < tags.length - 1 && <span> &middot; </span>}
                        </span>
                      ))}
                    </p>{" "}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={"py-32"} id={"about"}>
          <div className={"grid sm:grid-cols-3 gap-8 sm:gap-4 mb-8"}>
            <div
              className={"sm:col-span-2 flex flex-col gap-4 justify-center p-4"}
            >
              <h2 className={"text-4xl font-bold"}>I&apos;m Topher</h2>
              <p>
                <span className={"text-primary font-bold"}>
                  A passionate community builder.
                </span>{" "}
                As a software engineer, my work goes beyond just writing code;
                it is about fostering connection. I specialize in impactful,
                cross-platform mobile development and consulting because I am
                deeply passionate about building digital spaces that bring
                people together. Whether I&apos;m partnering with local
                grassroots organizations or global innovators, my goal is to
                deliver end-to-end solutions that do not just function
                flawlessly, but actually empower, engage, and uplift the
                communities they serve.
              </p>
              <Link href={"mailto:topher@bessaapps.com"}>
                <Button className={"cursor-pointer hover:scale-110"}>
                  Let&apos;s Talk!
                </Button>
              </Link>
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
        <FAQSection />
        {!!articles?.length && (
          <div className={"py-32"}>
            <div className={"grid sm:grid-cols-2 gap-4 mx-4 mb-8"}>
              <h2 className={"text-4xl font-bold"}>Launchpad</h2>
              <p>
                Designed for innovators and organizations stuck in the ideation
                stage, Launchpad provides the clear path you need to move past
                uncertainty. It&apos;s time to stop dreaming and start launching
                your custom cross-platform solution.
              </p>
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-4 gap-4"}>
              {articles.map((article: Post) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  hasExcerpt={false}
                />
              ))}
              <Link
                href={"/launchpad"}
                title={"Launchpad: The App Builder's Guide"}
              >
                <div
                  className={
                    "aspect-square rounded-2xl overflow-hidden flex items-center justify-center"
                  }
                >
                  <div
                    className={
                      "flex items-center gap-4 text-primary font-semibold"
                    }
                  >
                    <p>See All Articles</p>
                    <AiOutlineArrowRight className={"text-3xl"} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
