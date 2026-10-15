import { Button } from "@/components/ui/button";
import Link from "next/link";
import Work1 from "@/assets/images/mockups/work-1.png";
import Work2 from "@/assets/images/mockups/work-2.png";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import ProcessSection from "../components/sections/ProcessSection";
import { Post } from "@/lib/definitions";
import { bookingLink, FAQS, LINKS, SOCIALS } from "@/lib/constants";
import { Graph, ListItem, Question } from "schema-dts";
import ArticleCard from "@/components/ArticleCard";
import Services from "@/components/Services";
import FAQSection from "../components/sections/FAQSection";
import HeroSection from "../components/sections/HeroSection";
import {
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandTypescript
} from "react-icons/tb";
import Section from "../components/sections/Section";

export default async function Home() {
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
        sameAs: SOCIALS
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <HeroSection />
      <Section id={"services"}>
        <div className={"grid sm:grid-cols-2 gap-4 mx-4 mb-8"}>
          <h2 className={"text-4xl font-bold"}>Services</h2>
          <p>
            Turn your app idea from a napkin sketch to an impactful, sustainable
            product. My in-depth, cross-platform app development services
            include a comprehensive process including validating your idea,
            developing your app, testing your app and keeping it up-to-date,
            publishing your app to the Apple App Store, Google Play, the web,
            and more, and getting your app into the hands of people who need and
            want it. My services are designed to see you all the way from the
            ideation phase to well past the distribution stage.{" "}
            <span className={"text-nowrap"}>
              <Link
                href={bookingLink}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={"text-accent-foreground font-semibold"}
              >
                Start Here &rarr;
              </Link>
            </span>
          </p>
        </div>
        <Services />
      </Section>
      <ProcessSection />
      <Section id={"works"}>
        <h2 className={"text-4xl font-bold mx-4 mb-8"}>Pinned Projects</h2>
        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4"}>
          {WORKS.map(({ name, href, image, tags }) => (
            <div
              key={href}
              className={
                "bg-card relative max-w-full h-full aspect-square rounded-2xl"
              }
            >
              <Image
                src={image}
                alt={name}
                className={"h-full w-full object-contain p-8 sm:p-16"}
                sizes={"(max-width: 640px) 100vw, 626px"}
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
                <p className={"text-accent-foreground font-semibold"}>{name}</p>
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
      </Section>
      <Section id={"about"}>
        <div className={"grid sm:grid-cols-3 gap-8 sm:gap-4 mb-8"}>
          <div
            className={"sm:col-span-2 flex flex-col gap-4 justify-between p-4"}
          >
            <h2 className={"text-4xl font-bold"}>I&apos;m Topher</h2>
            <div className={"flex flex-col gap-4"}>
              <p>
                As a passionate community-builder, I deeply believe that apps
                can be powerful tools in keeping important communities safe and
                thriving. I enjoy working with individuals and organizations,
                building them cross-platform apps as a means for communication
                and mobilization. With more than a decade of experience and a
                degree in web application development, I’m excited to help you
                build effective relationships with your community.
              </p>
              <div>
                <Link
                  href={bookingLink}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  <Button
                    size={"lg"}
                    className={"cursor-pointer hover:scale-110"}
                  >
                    Let&apos;s chat!
                  </Button>
                </Link>
              </div>
              <div className={"flex gap-2"}>
                <TbBrandTypescript />
                <TbBrandJavascript />
                <TbBrandNodejs />
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
      </Section>
      <FAQSection />
      {!!articles?.length && (
        <Section>
          <div className={"grid sm:grid-cols-2 gap-4 mx-4 mb-8"}>
            <h2 className={"text-4xl font-bold"}>Launchpad</h2>
            <p>
              Designed for innovators and organizations stuck in the ideation
              stage, Launchpad provides the clear path you need to move past
              uncertainty. It&apos;s time to stop dreaming and start launching
              your custom cross-platform solution.{" "}
              <span className={"text-nowrap"}>
                <Link
                  href={"/launchpad"}
                  title={"Launchpad: The App Builder's Guide"}
                  className={"text-accent-foreground font-semibold"}
                >
                  Read More &rarr;
                </Link>
              </span>
            </p>
          </div>
          <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
            {articles.map((article: Post) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
