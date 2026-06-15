import { Button } from "@/components/ui/button";
import Link from "next/link";
import Work1 from "@/assets/images/mockups/work-1.png";
import Work2 from "@/assets/images/mockups/work-2.png";
import Work3 from "@/assets/images/mockups/work-3.png";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProcessSection from "../components/ProcessSection";
import { Post } from "@/lib/definitions";
import { bookingLink, title } from "@/lib/constants";
import { Graph } from "schema-dts";
import BlurInText from "@/components/BlurInText";
import ArticleCard from "@/components/ArticleCard";
import Services from "@/components/Services";
import Hero from "@/assets/images/hero.png";
import FAQSection from "../components/FAQSection";

export default async function Home() {
  const subheading =
    "Partnering with forward-thinking innovators, organizations, and communities through expert mobile development and consulting to build cross-platform apps that drive real-world change. Specializing in end-to-end engineering solutions designed for maximum impact.";

  const works = [
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
    },
    {
      name: "CommuniVol",
      image: Work3,
      tags: ["Expo", "React Native", "MongoDB"]
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
        <div className={"py-24 sm:py-32"}>
          <div className={"flex flex-col gap-4 max-w-full"}>
            <h1
              className={"text-5xl font-bold leading-[1.1] sm:max-w-[66.66%]"}
            >
              <BlurInText>{title}</BlurInText>
            </h1>
            <p className={"text-xl sm:max-w-[66.66%] mb-8"}>
              <BlurInText
                offset={title.split(" ").length * 100}
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
                  animationDelay: `${title.split(" ").length * 100 + subheading.split(" ").length * 50 + 1000}ms`
                }}
              >
                Start my Project!
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={"opacity-0 animate-blur-in-fade-in relative "}
        style={{
          aspectRatio: 4987 / 2528,
          animationDelay: `${title.split(" ").length * 100 + subheading.split(" ").length * 50 + 2000}ms`
        }}
      >
        <Image
          src={Hero}
          alt={
            "3D Apple App Store and Google Play Store icons on a dark background, representing custom mobile app development services for iOS and Android."
          }
          fill
        />
        <div
          className={
            "absolute inset-0 bg-linear-to-t from-background to-transparent"
          }
        />
      </div>
      <div className={"max-w-[1300] px-4 mx-auto"}>
        <div className={"py-32"}>
          <div className={"grid sm:grid-cols-2 gap-4 mx-4 mb-8"}>
            <h2 className={"text-4xl font-bold"}>
              Comprehensive Mobile Development and Consulting Services{" "}
            </h2>
            <p>
              Through comprehensive mobile development and consulting, I guide
              your project through every stage of the software lifecycle. The
              foundation is robust, cross-platform app development, engineered
              to deliver flawless performance across iOS and Android devices. To
              ensure a successful market entry, I manage the technical
              intricacies of app store publishing, seamlessly navigating both
              Apple and Google review guidelines to get your product live.
              Post-launch, I provide data-driven app marketing strategies to
              accelerate user acquisition and visibility, alongside continuous
              app maintenance to guarantee long-term security, smooth feature
              updates, and optimal scaling as your user base grows.{" "}
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
            <h2 className={"text-4xl font-bold"}>
              Crafting the Future of Custom Application Development
            </h2>
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
          <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
            {works.map(({ name, href, image, tags }, index: number) => (
              <div key={index} className={"flex flex-col gap-4"}>
                {href ? (
                  <Link
                    href={href}
                    title={name}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    <div className={"bg-card rounded-2xl overflow-hidden"}>
                      <Image
                        src={image}
                        alt={name}
                        className={"hover:scale-125 duration-200"}
                      />
                    </div>
                  </Link>
                ) : (
                  <div className={"bg-card rounded-2xl overflow-hidden"}>
                    <Image
                      src={image}
                      alt={name}
                      className={"hover:scale-125 duration-200"}
                    />
                  </div>
                )}
                <div className={"px-4"}>
                  <p className={"text-primary font-semibold"}>
                    {href ? (
                      <Link
                        href={href}
                        title={"AS/400 App"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                      >
                        {name}
                      </Link>
                    ) : (
                      name
                    )}
                  </p>
                  <p>
                    {tags.map((tag: string, index: number) => (
                      <span key={index}>
                        {tag}
                        {index < tags.length - 1 && <span> &middot; </span>}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
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
                <ArticleCard key={article.id} article={article} />
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
