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
import Logo from "@/assets/images/logo.png";
import GradientHeading from "@/components/GradientHeading";
import { AiOutlineCheck } from "react-icons/ai";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import Process from "@/components/Process";
import { stripHtml } from "string-strip-html";
import { Post } from "@/lib/definitions";

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
  const services = await axios
    .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=2")
    .then((response) => response.data)
    .catch((error) => console.error(error));
  // const customers = await axios
  //   .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=4")
  //   .then((response) => response.data)
  //   .catch((error) => console.error(error));

  return (
    <main>
      <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
        <div className={"max-w-7xl mx-auto px-4 py-16 sm:py-32"}>
          <div className={"flex flex-col gap-4 max-w-full"}>
            <Link href={"/"} title={formatTitle("")}>
              <div className={"w-24 aspect-square"}>
                <Image src={Logo} alt={formatTitle("")} />
              </div>
            </Link>
            <h1
              className={
                "animate-text text-5xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-tr from-muted-foreground via-primary to-foreground font-bold leading-[1.1] sm:max-w-[75%]"
              }
            >
              You bring the idea. I&apos;ll bring the app.
            </h1>
            <p className={"text-2xl sm:max-w-[66%] mb-8"}>
              Human-Centered Mobile App Development Services for Ideas That
              Deserve Momentum
            </p>
            <Link
              href={"https://calendar.app.google/fCR1Xnhv9FUfXznPA"}
              target={"_blank"}
            >
              <Button size={"lg"}>Start my Project</Button>
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
      <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
        <SectionHeading>Selected Works</SectionHeading>
        <div className={"grid grid-cols-1 sm:grid-cols-3 gap-4"}>
          <div className={"flex flex-col gap-4"}>
            <Link
              href={"https://apps.apple.com/us/app/learn-as-400/id6751155402"}
              title={"AS/400 App"}
              target={"_blank"}
            >
              <div className={"overflow-hidden"}>
                <Image
                  src={Work1}
                  alt={formatTitle("")}
                  className={"hover:scale-125 duration-200"}
                />
              </div>
            </Link>
            <h3 className={"font-semibold text-xl"}>
              <Link
                href={"https://apps.apple.com/us/app/learn-as-400/id6751155402"}
                title={"AS/400 App"}
                target={"_blank"}
              >
                AS/400 App
              </Link>
            </h3>
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
              className={"overflow-hidden"}
            >
              <Image
                src={Work2}
                alt={formatTitle("")}
                className={"hover:scale-125 duration-200"}
              />
            </Link>
            <h3 className={"font-semibold text-xl"}>
              <Link
                href={"https://getbessa.com"}
                title={"Bessa | Gay Social Media App"}
                target={"_blank"}
              >
                Bessa
              </Link>
            </h3>
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
              className={"overflow-hidden"}
            >
              <Image
                src={Work3}
                alt={formatTitle("")}
                className={"hover:scale-125 duration-200"}
              />
            </Link>
            <h3 className={"font-semibold text-xl"}>
              <Link
                href={"https://getresumemint.com"}
                title={"Resume Mint"}
                target={"_blank"}
              >
                Resume Mint
              </Link>
            </h3>
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
            const excerpt = stripHtml(service.excerpt.rendered).result;

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                title={formatTitle(excerpt)}
              >
                <div className={"bg-card aspect-square p-4"}>
                  <div className={"flex flex-col justify-between h-full"}>
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: service.title.rendered
                        }}
                        className={"text-primary font-semibold"}
                      />
                      <p>{excerpt}</p>
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
      {/*<div className={"max-w-[1200] px-4 py-32 mx-auto"}>*/}
      {/*  <SectionHeading>Solutions</SectionHeading>*/}
      {/*  <GradientHeading>Smart Tech with Real Impact</GradientHeading>*/}
      {/*  <p className={"mb-8"}>*/}
      {/*    Mobile apps aren&apos;t just software. They&apos;re solutions. As a*/}
      {/*    React Native app developer, I help businesses tackle challenges and*/}
      {/*    unlock opportunities through smart, scalable technology. Need to*/}
      {/*    streamline customer bookings? Launch an e-commerce storefront? Build a*/}
      {/*    platform for community engagement? Why stop there?! With expertise in*/}
      {/*    cross-platform app development, custom business app solutions, and iOS*/}
      {/*    and Android app development, I create tools that make life easier for*/}
      {/*    your customers and more profitable for your business.*/}
      {/*  </p>*/}
      {/*  <p className={"mb-8"}>*/}
      {/*    But solutions don&apos;t stop at functionality. They&apos;re about*/}
      {/*    impact. That&apos;s why I offer end-to-end React Native development*/}
      {/*    services, from app prototyping and MVPs to startup app solutions and*/}
      {/*    full-scale enterprise builds. Every feature is designed with purpose,*/}
      {/*    whether it&apos;s to drive sales, boost engagement, or create stronger*/}
      {/*    brand loyalty. With the right app development services, your app*/}
      {/*    becomes more than just a product. It becomes the solution your*/}
      {/*    customers can&apos;t live without. Here are just a few examples:*/}
      {/*  </p>*/}
      {/*  <div className={"grid sm:grid-cols-3 gap-4"}>*/}
      {/*    <div className={"flex flex-col gap-4"}>*/}
      {/*      <div className={"overflow-hidden"}>*/}
      {/*        <Image*/}
      {/*          src={Solution1}*/}
      {/*          alt={formatTitle("")}*/}
      {/*          className={"hover:scale-125 duration-200"}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*      <h3 className={"font-semibold text-xl"}>Authentication</h3>*/}
      {/*      <p>*/}
      {/*        As a react native app developer, I build secure and seamless*/}
      {/*        authentication systems, from social logins to biometric access,*/}
      {/*        that keep users safe while making sign-ins effortless. Trust*/}
      {/*        starts with security, and your customers will feel it from the*/}
      {/*        first tap.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className={"flex flex-col gap-4"}>*/}
      {/*      <div className={"overflow-hidden"}>*/}
      {/*        <Image*/}
      {/*          src={Solution2}*/}
      {/*          alt={formatTitle("")}*/}
      {/*          className={"hover:scale-125 duration-200"}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*      <h3 className={"font-semibold text-xl"}>Direct Messaging</h3>*/}
      {/*      <p>*/}
      {/*        Community thrives on conversation. With cross-platform app*/}
      {/*        development, I create in-app messaging features that let users*/}
      {/*        connect directly, building stronger engagement and lasting loyalty*/}
      {/*        within your app.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className={"flex flex-col gap-4"}>*/}
      {/*      <div className={"overflow-hidden"}>*/}
      {/*        <Image*/}
      {/*          src={Solution3}*/}
      {/*          alt={formatTitle("")}*/}
      {/*          className={"hover:scale-125 duration-200"}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*      <h3 className={"font-semibold text-xl"}>In-App Purchases</h3>*/}
      {/*      <p>*/}
      {/*        Boost revenue with custom app development that integrates smooth*/}
      {/*        and reliable in-app purchasing. Whether it&apos;s subscriptions,*/}
      {/*        upgrades, or one-time buys, I design iOS and Android app*/}
      {/*        development solutions that make it easy for customers to say yes.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className={"max-w-[1200] px-4 py-32 mx-auto"}>*/}
      {/*  <div className={"grid grid-cols-1 sm:grid-cols-4 gap-4"}>*/}
      {/*    {customers?.map((customer: Post, index: number) => (*/}
      {/*      <Fragment key={customer.id}>*/}
      {/*        <Link*/}
      {/*          href={`/customers/${customer.slug}`}*/}
      {/*          title={formatTitle(customer.title.rendered)}*/}
      {/*        >*/}
      {/*          <div className={"bg-card aspect-square p-4"}>*/}
      {/*            <div className={"flex flex-col justify-between h-full"}>*/}
      {/*              <div>*/}
      {/*                <div*/}
      {/*                  dangerouslySetInnerHTML={{*/}
      {/*                    __html: customer.excerpt.rendered*/}
      {/*                  }}*/}
      {/*                  className={"text-primary font-semibold"}*/}
      {/*                />*/}
      {/*                <div*/}
      {/*                  dangerouslySetInnerHTML={{*/}
      {/*                    __html: customer.title.rendered*/}
      {/*                  }}*/}
      {/*                />*/}
      {/*              </div>*/}
      {/*              <div>*/}
      {/*                <Button>Learn More</Button>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </Link>*/}
      {/*        {index === 2 && (*/}
      {/*          <>*/}
      {/*            <div className={"hidden sm:block"} />*/}
      {/*            <div className={"hidden sm:block"} />*/}
      {/*          </>*/}
      {/*        )}*/}
      {/*      </Fragment>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}
      <Process />
      <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
        <SectionHeading>Hello, there!</SectionHeading>
        <div className={"grid sm:grid-cols-4 gap-4"}>
          <div className={"bg-card aspect-[8/10] p-4"}>
            <div className={"flex flex-col justify-between h-full"}>
              <h3 className={"font-semibold text-primary"}>I&apos;m Topher</h3>
              <div className={"flex flex-col gap-4"}>
                <p className={"text-primary"}>
                  Ten years of experience building mobile and web apps, solving
                  problems, and fostering community.
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
          <Image src={Me} alt={formatTitle("")} />
          <div className={"hidden sm:block col-span-2"} />
          <div className={"hidden sm:block col-span-2"} />
          <div className={"sm:col-span-2"}>
            <GradientHeading>
              Meet Your React Native app developer, mobile and web app guru,
              problem-solver, and community builder.
            </GradientHeading>
          </div>
        </div>
      </div>
      {/*<div className={"max-w-[1200] px-4 py-32 mx-auto"}>*/}
      {/*  <SectionHeading>Dev Gotchas</SectionHeading>*/}
      {/*  <div className={"flex gap-4 overflow-x-auto"}>*/}
      {/*{gotchas?.map(({ slug, heading, keyword }, index) => (*/}
      {/*  <Link*/}
      {/*    key={index}*/}
      {/*    href={`/dev-gotchas/${slug}`}*/}
      {/*    title={formatTitle(keyword)}*/}
      {/*  >*/}
      {/*    <div className={"w-[250] bg-neutral aspect-square p-4"}>*/}
      {/*      <div className={"flex flex-col justify-between h-full"}>*/}
      {/*        <h3 className={"text-primary font-semibold"}>{heading}</h3>*/}
      {/*        <div>*/}
      {/*          <button className={"btn btn-primary btn-outline "}>*/}
      {/*            Learn More*/}
      {/*          </button>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </Link>*/}
      {/*))}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </main>
  );
}
