import { Button } from "@/components/ui/button";
import Link from "next/link";
import Work1 from "@/assets/images/mockups/work-1.png";
import Work2 from "@/assets/images/mockups/work-2.png";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProcessSection from "../components/ProcessSection";
import { Post } from "@/lib/definitions";
import { bookingLink, FAQS, LINKS } from "@/lib/constants";
import { Graph, ListItem, Question } from "schema-dts";
import BlurInText from "@/components/BlurInText";
import ArticleCard from "@/components/ArticleCard";
import Services from "@/components/Services";
import FAQSection from "../components/FAQSection";
import HeroSection from "../components/HeroSection";

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

  const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        name: "Bessa Community Apps",
        url: "https://bessaapps.com",
        logo: "https://bessaapps.com/logo.png",
        image: "https://bessaapps.com/logo.png",
        description: SUBHEADING,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89104",
          addressCountry: "US"
        },
        priceRange: "$1500+",
        sameAs: [
          "https://x.com/bessaapps",
          "https://linkedin.com/company/bessaapps",
          "https://github.com/bessaapps"
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: Object.entries(FAQS).map(
          ([key, value]): Question => ({
            "@type": "Question",
            name: key,
            acceptedAnswer: { "@type": "Answer", text: value }
          })
        )
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          ...LINKS.map(
            ({ href, anchor }, index): ListItem => ({
              "@type": "ListItem",
              position: index + 1,
              name: anchor,
              item: `https://bessaapps.com${href}`
            })
          ),
          {
            "@type": "ListItem",
            position: LINKS.length + 1,
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
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
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
      <HeroSection
        animationDelay={`${HEADING.split(" ").length * 100 + SUBHEADING.split(" ").length * 50 + 2000}ms`}
      />
      <div className={"max-w-[1300] sm:px-4 mx-auto"}>
        <div className={"py-32"}>
          <div className={"grid sm:grid-cols-2 gap-4 mx-4 mb-8"}>
            <h2 className={"text-4xl font-bold"}>Services</h2>
            <p>
              Get your quality app that works beautifully on iOS, Android, and
              web. I&apos;ll help you all the way from validating your idea to
              publishing it to the app stores, help you with everything in
              between, test your app, keep your app secure, snappy, and
              up-to-date, and solve any technical issues that may come up.{" "}
              <span className={"text-nowrap"}>
                <Link
                  href={bookingLink}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={"text-primary font-semibold"}
                >
                  Start Here &rarr;
                </Link>
              </span>
            </p>
          </div>
          <Services />
        </div>
        <ProcessSection />
        <div className={"py-32"} id={"works"}>
          <h2 className={"text-4xl font-bold mx-4 mb-8"}>Pinned Projects</h2>
          <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4"}>
            {WORKS.map(({ name, href, image, tags }) => (
              <Link
                key={href}
                href={href}
                title={name}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={
                  "bg-card relative max-w-full h-full aspect-square rounded-2xl"
                }
              >
                <Image
                  src={image}
                  alt={name}
                  className={"h-full w-full object-contain p-8 sm:p-16"}
                  sizes={"(max-width: 640px) 375px, 626px"}
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
                  </p>
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
                I care deeply about keeping online and real-life communities
                important to our culture thriving and protected. Web and mobile
                apps are a great way to connect people in society. So, the
                technology we build together can support, advance, and defend
                important communities. From non-profits to educational
                institutions and everything in between, we can establish tools
                to champion and conserve the communities we care about most.
              </p>
              <Link href={"mailto:topher@bessaapps.com"}>
                <Button className={"cursor-pointer hover:scale-110"}>
                  Let&apos;s get started!
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
