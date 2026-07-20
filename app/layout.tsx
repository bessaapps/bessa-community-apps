import "./globals.css";
import CTASection from "../components/sections/CTASection";
import { formatMetadata } from "@/lib/helpers";
import { url } from "@/lib/constants";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import Clock from "@/components/Clock";
import Weather from "@/components/Weather";
import TopNavigation from "../components/navigation/TopNavigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["500"],
  variable: "--font-ibm-plex-serif"
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans"
});

export const metadata = formatMetadata({
  metadataTitle: "Bessa Community Apps",
  metadataDescription:
    "Building and publishing revolutionary cross-platform apps to the Apple App Store and Google Play for innovators, organizations, and communities.",
  path: url
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body
        className={`${ibmPlexSerif.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <div className={"h-full max-h-screen grid grid-rows-[auto_1fr]"}>
          <TopNavigation />
          <main>
            <div className={"overflow-y-scroll"}>
              {children}
              <CTASection />
            </div>
          </main>
        </div>
        <Clock />
        <Weather />
      </body>
      {process.env.NODE_ENV !== "development" && (
        <>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
          <Script
            src={"https://plausible.io/js/pa-hfGv_cBDDnOhXgCy0sWFP.js"}
            strategy={"beforeInteractive"}
          />
          <Script id={"plausible"} strategy={"beforeInteractive"}>
            {`
              window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
              plausible.init()
            `}
          </Script>
        </>
      )}
    </html>
  );
}
