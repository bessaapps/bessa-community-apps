import { Button } from "@/components/ui/button";
import Link from "next/link";
import Work1 from "@/assets/images/mockups/work-1.png";
import Work2 from "@/assets/images/mockups/work-2.png";
import Work3 from "@/assets/images/mockups/work-3.png";
import Solution1 from "@/assets/images/mockups/solution-1.png";
import Solution2 from "@/assets/images/mockups/solution-2.png";
import Solution3 from "@/assets/images/mockups/solution-3.png";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import { SiAndroid, SiApple } from "react-icons/si";
import SectionHeading from "@/components/SectionHeading";
import { formatTitle } from "@/lib/helpers";
import Logo from "@/assets/images/logo.png";
import GradientHeading from "@/components/GradientHeading";
import { AiOutlineCheck } from "react-icons/ai";
import { Fragment } from "react";
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
  const customers = await axios
    .get("https://cms.bessaapps.com/wp-json/wp/v2/posts?categories=4")
    .then((response) => response.data)
    .catch((error) => console.error(error));

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
              <Button size={"lg"}>Let&apos;s Talk!</Button>
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
          <div className={"sm:col-span-2 pt-8"}>
            <GradientHeading>
              Custom App Solutions that People Love to Use
            </GradientHeading>
            <Highlights
              list={[
                "Effortless, beautiful, and intuitive",
                "Accessible UI design",
                "Meaningful, emotional brand experiences"
              ]}
            />
          </div>
          <div className={"hidden sm:block"} />
          <p>
            As a react native app developer, I believe a mobile experience
            should feel effortless, both beautiful and usable. That&apos;s why
            my work emphasizes accessible UI design that welcomes every
            customer, regardless of device, ability, or context. From intuitive
            navigation to thoughtful details in layout and color contrast,
            accessibility ensures that your brand isn&apos;t just seen, but
            truly felt. It transforms an app from a tool into a trusted
            companion that builds real, lasting connections with your audience.
          </p>
          <p>
            But design is only half the story. Powerful functionality is what
            gives your app depth. With expertise in cross-platform app
            development, custom app solutions, and scalable architectures, I
            craft experiences that go beyond the surface. Whether it&apos;s
            seamless iOS and Android app development, smooth integrations, or
            future-proof performance, my projects are built to grow alongside
            your business. The result? Apps that don&apos;t just meet customer
            needs but strengthen the bond between your brand and the people who
            matter most.
          </p>
        </div>
      </div>
      <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
        <SectionHeading>Community</SectionHeading>
        <GradientHeading>Belonging is Built Right In</GradientHeading>
        <div className={"flex flex-col gap-4"}>
          <div>
            <Highlights
              list={[
                "Apps that feel like communities",
                "Transform users into brand advocates",
                "Spark conversation and turn engagement into lasting relationships."
              ]}
            />
          </div>
          <p>
            A great app is more than code; it&apos;s a gathering place. As a
            react native app developer, I see every project as an opportunity to
            create digital spaces where customers feel like insiders, not just
            users. Through thoughtful features like in-app chat, personalized
            experiences, and seamless push notifications, apps become more than
            tools. They become bridges between brands and the people who believe
            in them. That sense of belonging transforms casual customers into
            loyal advocates who return again and again.
          </p>
          <p>
            But community doesn&apos;t happen by accident. It&apos;s built
            through custom app development that puts people first and scales as
            relationships grow. Whether you&apos;re a startup nurturing your
            first audience or an established business ready to deepen
            engagement, I design apps that help brands spark conversation,
            foster trust, and keep fans invested. With the right app development
            services, your app can become a thriving hub where customers
            don&apos;t just interact with your business; they identify with it.
          </p>
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
          <div className={"sm:col-span-2 pt-8"}>
            <GradientHeading>
              All-in-One App Development Services
            </GradientHeading>
            <Highlights
              list={[
                "Beautiful on every device and platform",
                "Consistent brand presence across every device",
                "Boost discoverability, downloads, and user loyalty"
              ]}
            />
          </div>
          <div />
          <p>
            Every business deserves an app that works seamlessly across devices
            and platforms. As a react native app developer, I specialize in
            mobile development that feels intuitive, powerful, and ready to
            scale. From iOS and Android app development to polished web
            development that keeps your brand consistent across every
            touchpoint, I create solutions that engage customers and strengthen
            relationships. Whether you need custom app development,
            cross-platform builds, or startup MVPs, I provide the technical
            expertise to bring your vision to life.
          </p>
          <p>
            But building the app is just the beginning. My app development
            services extend to SEO and ASO strategies that help your app get
            discovered, downloaded, and loved. I also handle app store
            distribution so your launch is smooth, stress-free, and impactful.
            The result is a full-stack partnership where React Native
            development services meet marketing insight, so your product
            doesn&apos;t just exist in the store, it thrives in the hands of
            your customers.
          </p>
        </div>
      </div>
      <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
        <SectionHeading>Solutions</SectionHeading>
        <GradientHeading>Smart Tech with Real Impact</GradientHeading>
        <p className={"mb-8"}>
          Mobile apps aren&apos;t just software. They&apos;re solutions. As a
          React Native app developer, I help businesses tackle challenges and
          unlock opportunities through smart, scalable technology. Need to
          streamline customer bookings? Launch an e-commerce storefront? Build a
          platform for community engagement? Why stop there?! With expertise in
          cross-platform app development, custom business app solutions, and iOS
          and Android app development, I create tools that make life easier for
          your customers and more profitable for your business.
        </p>
        <p className={"mb-8"}>
          But solutions don&apos;t stop at functionality. They&apos;re about
          impact. That&apos;s why I offer end-to-end React Native development
          services, from app prototyping and MVPs to startup app solutions and
          full-scale enterprise builds. Every feature is designed with purpose,
          whether it&apos;s to drive sales, boost engagement, or create stronger
          brand loyalty. With the right app development services, your app
          becomes more than just a product. It becomes the solution your
          customers can&apos;t live without. Here are just a few examples:
        </p>
        <div className={"grid sm:grid-cols-3 gap-4"}>
          <div className={"flex flex-col gap-4"}>
            <div className={"overflow-hidden"}>
              <Image
                src={Solution1}
                alt={formatTitle("")}
                className={"hover:scale-125 duration-200"}
              />
            </div>
            <h3 className={"font-semibold text-xl"}>Authentication</h3>
            <p>
              As a react native app developer, I build secure and seamless
              authentication systems, from social logins to biometric access,
              that keep users safe while making sign-ins effortless. Trust
              starts with security, and your customers will feel it from the
              first tap.
            </p>
          </div>
          <div className={"flex flex-col gap-4"}>
            <div className={"overflow-hidden"}>
              <Image
                src={Solution2}
                alt={formatTitle("")}
                className={"hover:scale-125 duration-200"}
              />
            </div>
            <h3 className={"font-semibold text-xl"}>Direct Messaging</h3>
            <p>
              Community thrives on conversation. With cross-platform app
              development, I create in-app messaging features that let users
              connect directly, building stronger engagement and lasting loyalty
              within your app.
            </p>
          </div>
          <div className={"flex flex-col gap-4"}>
            <div className={"overflow-hidden"}>
              <Image
                src={Solution3}
                alt={formatTitle("")}
                className={"hover:scale-125 duration-200"}
              />
            </div>
            <h3 className={"font-semibold text-xl"}>In-App Purchases</h3>
            <p>
              Boost revenue with custom app development that integrates smooth
              and reliable in-app purchasing. Whether it&apos;s subscriptions,
              upgrades, or one-time buys, I design iOS and Android app
              development solutions that make it easy for customers to say yes.
            </p>
          </div>
        </div>
      </div>
      <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
        <div className={"grid grid-cols-1 sm:grid-cols-4 gap-4"}>
          {customers?.map((customer: Post, index: number) => (
            <Fragment key={customer.id}>
              <Link
                href={`/customers/${customer.slug}`}
                title={formatTitle(customer.title.rendered)}
              >
                <div className={"bg-card aspect-square p-4"}>
                  <div className={"flex flex-col justify-between h-full"}>
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: customer.excerpt.rendered
                        }}
                        className={"text-primary font-semibold"}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: customer.title.rendered
                        }}
                      />
                    </div>
                    <div>
                      <Button>Learn More</Button>
                    </div>
                  </div>
                </div>
              </Link>
              {index === 2 && (
                <>
                  <div className={"hidden sm:block"} />
                  <div className={"hidden sm:block"} />
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
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
