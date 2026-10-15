import type { Metadata } from "next";
import Link from "next/link";
import { Graph } from "schema-dts";
import { BOOKING_LINK, METADATA, SOCIALS, URL } from "@/lib/constants";
import { LuMapPin } from "react-icons/lu";

const TITLE = "Contact Bessa Community Apps";
const DESCRIPTION =
  "Start your cross-platform mobile app with a call, email, or by downloading the non-disclosure agreement.";

export const metadata: Metadata = {
  ...METADATA,
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    ...METADATA.openGraph,
    title: TITLE,
    description: DESCRIPTION,
    url: `${URL}/contact`
  },
  twitter: { ...METADATA.twitter, title: TITLE, description: DESCRIPTION }
};

export default function ContactPage() {
  const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Bessa Community Apps",
        url: "https://bessaapps.com",
        logo: "https://bessaapps.com/logo.png",
        sameAs: SOCIALS
      },
      {
        "@type": "ContactPage",
        name: "Contact Bessa Community Apps",
        description:
          "Start your cross-platform mobile app with a call, email, or by downloading the non-disclosure agreement.",
        url: `${URL}/contact`,
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString()
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <div className={"max-w-7xl min-h-screen flex items-center px-8 mx-auto"}>
        <div className={"flex flex-col gap-2"}>
          <h1 className={"text-5xl font-bold leading-[1.1] mb-4"}>Say, hi!</h1>
          <p className={"flex items-center gap-2"}>
            <LuMapPin />
            Remote - Las Vegas, NV
          </p>
          <p>
            <Link
              href={BOOKING_LINK}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className={"text-accent-foreground font-semibold"}
            >
              Book a call &rarr;
            </Link>
          </p>
          <p>
            <Link
              href={"mailto:topher@bessaapps.com"}
              className={"text-accent-foreground font-semibold"}
            >
              Email me &rarr;
            </Link>
          </p>
          <p>
            <Link
              href={
                "https://www.jotform.com/sign/261745910908059/invite/01kvxkwmcheed4c02314dd1d29"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
              className={"text-accent-foreground font-semibold"}
            >
              Non-Disclosure Agreement &rarr;
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
