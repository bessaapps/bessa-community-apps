import { Button } from "@/components/ui/button";
import Link from "next/link";
import Work1 from "@/assets/images/mockups/work-1.png";
import Work2 from "@/assets/images/mockups/work-2.png";
import Work3 from "@/assets/images/mockups/work-3.png";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import { formatTitle } from "@/lib/helpers";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import Process from "@/components/Process";
import { Post } from "@/lib/definitions";
import { bookingLink } from "@/lib/constants";
import { Graph } from "schema-dts";
import BlurInText from "@/components/BlurInText";
import ArticleCard from "@/components/ArticleCard";
import Services from "@/components/Services";
import Hero from "@/assets/images/hero.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default async function Home() {
  const heading =
    "Custom Application Development for Innovators & Organizations";
  const subheading =
    "Your app idea is great. Now what? I provide custom application development services that transform bold concepts into powerful cross-platform solutions for startups, organizations, and communities.";

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

  const articles = await axios
    .get(
      "https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=3&per_page=3&_embed"
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
        <div className={"max-w-[1300] mx-auto px-4 pt-24 sm:pt-32 pb-12"}>
          <div className={"flex flex-col gap-4 max-w-full"}>
            <h1
              className={
                "text-5xl sm:text-7xl font-bold leading-[1.1] sm:max-w-[75%]"
              }
            >
              <BlurInText>{heading}</BlurInText>
            </h1>
            <p className={"text-xl sm:max-w-[50%] mb-8"}>
              <BlurInText
                offset={heading.split(" ").length * 100}
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
                  animationDelay: `${heading.split(" ").length * 100 + subheading.split(" ").length * 50 + 1000}ms`
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
          animationDelay: `${heading.split(" ").length * 100 + subheading.split(" ").length * 50 + 2000}ms`
        }}
      >
        <Image src={Hero} alt={formatTitle("")} fill />
        <div
          className={
            "absolute inset-0 bg-linear-to-t from-background to-transparent"
          }
        />
      </div>
      <div className={"max-w-[1300] px-4 pb-32 mx-auto"}>
        <div className={"grid sm:grid-cols-2 gap-4 mx-4 mb-8"}>
          <h2 className={"text-4xl font-bold"}>
            Your Partner for End-to-End Custom Mobile App Development Services
          </h2>
          <p>
            Whether you are an innovator with a bold concept, an organization
            seeking internal tools, or a community aiming to foster connection,
            Bessa Community Apps provides the roadmap to move you past the
            initial stage of feeling immobilized. I offer expert custom mobile
            app development services that transform your vision into a
            high-performance, cross-platform reality across iOS, Android, and
            the web. By blending creativity with a logical, end-to-end process,
            my custom application development ensures your project moves
            seamlessly from ideation to successful app store distribution.{" "}
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
      <Process />
      <div className={"max-w-[1300] px-4 py-32 mx-auto"} id={"works"}>
        <div className={"grid sm:grid-cols-2 gap-4 mx-4 mb-8"}>
          <h2 className={"text-4xl font-bold"}>
            Crafting the Future of Custom Application Development
          </h2>
          <p>
            Every great project begins with a vision. Here&apos;s how I bridge
            the gap between a bold idea and a functional reality. Through my
            custom mobile app development services, I&apos;ve helped startups,
            non-profits, and local communities overcome the hurdle of technical
            complexity to launch high-performance, cross-platform tools. Here
            are some highlights of my commitment to custom application
            development that is not only modern and high-tech but also deeply
            human-centered, providing the scalable digital infrastructure your
            organization needs to grow and thrive.{" "}
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
                      alt={formatTitle(name)}
                      className={"hover:scale-125 duration-200"}
                    />
                  </div>
                </Link>
              ) : (
                <div className={"bg-card rounded-2xl overflow-hidden"}>
                  <Image
                    src={image}
                    alt={formatTitle(name)}
                    className={"hover:scale-125 duration-200"}
                  />
                </div>
              )}
              <div>
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
      <div className={"max-w-[1300] px-4 py-32 mx-auto"} id={"about"}>
        <div className={"grid sm:grid-cols-3 gap-8 sm:gap-4 mb-8"}>
          <div
            className={"sm:col-span-2 flex flex-col gap-4 justify-center p-4"}
          >
            <h2 className={"text-4xl font-bold"}>I&apos;m Topher</h2>
            <p>
              <span className={"text-primary font-bold"}>
                A passionate community builder.
              </span>{" "}
              Specializing in custom application development, I empower
              innovators, organizations, and communities to transform their bold
              ideas into impactful cross-platform solutions that function
              seamlessly across iOS, Android, and the web. My end-to-end process
              guides you confidently from initial ideation all the way to
              launch.
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
      <div className={"max-w-[1300] px-4 py-32 mx-auto"}>
        <Accordion type={"multiple"}>
          <AccordionItem value={"item-1"}>
            <AccordionTrigger>
              What types of mobile app development services does Bessa Community
              Apps provide?
            </AccordionTrigger>
            <AccordionContent>
              At Bessa Community Apps, I specialize in end-to-end custom mobile
              app development tailored to your unique business needs. My
              freelance services cover the entire app lifecycle, including UI/UX
              design, front-end and back-end development, API integration,
              rigorous QA testing, and App Store or Google Play deployment.
              Whether you need a simple utility app, a complex e-commerce
              platform, or a community-driven social application, I provide
              scalable and robust mobile solutions designed to engage your
              target audience and drive growth.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-2"}>
            <AccordionTrigger>
              Do you develop applications for both iOS and Android platforms?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Bessa Community Apps offers development for both iOS and
              Android devices. Depending on your project requirements, budget,
              and timeline, I can build native applications using Swift for iOS
              and Kotlin for Android to ensure maximum performance.
              Alternatively, I offer cross-platform app development using modern
              frameworks like React Native or Flutter. This cross-platform
              approach allows us to write a single codebase that works
              seamlessly on both operating systems, which often reduces
              development time and lowers overall project costs without
              sacrificing the user experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-3"}>
            <AccordionTrigger>
              What is your process for building a custom mobile app from
              scratch?
            </AccordionTrigger>
            <AccordionContent>
              My development process at Bessa Community Apps is highly
              collaborative and transparent, ensuring you are involved at every
              critical milestone. We begin with a comprehensive discovery phase
              to understand your business goals, target audience, and core
              features. From there, I create wireframes and interactive UI/UX
              prototypes so you can visualize the app before coding begins. Once
              the design is approved, I move into agile development, providing
              you with regular updates and functional builds. Finally, we
              conduct thorough beta testing to eliminate bugs before officially
              launching your application to the public app stores.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-4"}>
            <AccordionTrigger>
              How much does it cost to hire a freelance app developer through
              Bessa Community Apps?
            </AccordionTrigger>
            <AccordionContent>
              The cost of developing a mobile app varies significantly based on
              the complexity of the project, the number of features, the
              platforms required, and any third-party integrations. Because
              Bessa Community Apps operates as a specialized freelance service,
              I am able to offer highly competitive pricing compared to large
              development agencies, all while maintaining premium quality. I
              provide customized, itemized quotes after our initial
              consultation, ensuring you have a clear understanding of the
              investment required to bring your mobile app vision to life.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-5"}>
            <AccordionTrigger>
              How long does it typically take to develop and launch a mobile
              app?
            </AccordionTrigger>
            <AccordionContent>
              The timeline for mobile app development depends entirely on the
              scope and complexity of your project. A basic Minimum Viable
              Product (MVP) with core functionalities can often be designed,
              developed, and launched in as little as 6 to 8 weeks. However,
              more complex applications requiring custom backend architecture,
              user authentication, payment gateways, and advanced animations may
              take 3 to 6 months to complete. During our initial strategy
              session, Bessa Community Apps will provide you with a realistic,
              milestone-based timeline so you know exactly when to expect your
              product launch.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-6"}>
            <AccordionTrigger>
              Do you provide post-launch maintenance and app support?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. Launching your mobile app is just the beginning of its
              lifecycle. Bessa Community Apps offers comprehensive post-launch
              maintenance and support packages to ensure your application
              remains secure, up-to-date, and fully functional as operating
              systems evolve. My ongoing support services include bug tracking
              and fixes, performance optimization, server maintenance, and the
              integration of new features based on your user feedback. This
              ensures your app scales smoothly as your business and user base
              grow.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {!!articles?.length && (
        <div className={"max-w-[1300] flex flex-col gap-4 px-4 py-32 mx-auto"}>
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
            <Link href={"/launchpad"} title={formatTitle("Launchpad")}>
              <div
                className={
                  "bg-card aspect-square rounded-2xl overflow-hidden flex items-center justify-center"
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
    </section>
  );
}
