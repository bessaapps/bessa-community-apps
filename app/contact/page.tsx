import Link from "next/link";
import { formatMetadata } from "@/lib/helpers";
import { Graph } from "schema-dts";
import { bookingLink, SOCIALS, url } from "@/lib/constants";
import { LuMapPin } from "react-icons/lu";

export const metadata = formatMetadata({
  metadataTitle: "Contact Bessa Community Apps",
  metadataDescription:
    "Start your cross-platform mobile app with a call, email, or by downloading the non-disclosure agreement.",
  path: `${url}/contact`
});

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
        url: `${url}/contact`,
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
      <div
        className={"max-w-[1300] px-8 mx-auto"}
        style={{ minHeight: "calc(100vh - 65px)" }}
      >
        <div className={"py-24 sm:py-16"}>
          <div className={"flex flex-col gap-2"}>
            <h1 className={"text-5xl font-bold leading-[1.1] mb-2"}>Contact</h1>
            <p className={"text-primary text-xl font-bold"}>Topher</p>
            <p className={"flex items-center gap-2"}>
              <LuMapPin />
              Remote - Las Vegas, NV
            </p>
            <p>
              <Link
                href={bookingLink}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={"text-primary font-semibold"}
              >
                Book a call &rarr;
              </Link>
            </p>
            <p>
              <Link
                href={"mailto:topher@bessaapps.com"}
                className={"text-primary font-semibold"}
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
                className={"text-primary font-semibold"}
              >
                Non-Disclosure Agreement &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
